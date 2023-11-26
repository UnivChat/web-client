/* eslint-disable react/no-array-index-key */
import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import { useClassChat } from "@server-state/chat/hooks/queries";
import { getCookie } from "cookies-next";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { ChatBox } from "~/components/Chat/ChatBox";
import { AC_TOKEN_KEY } from "~/constants";
import * as Styled from "./Room.styles";
import { useWebsocket } from "./class.provider";

export const Room = () => {
  const { data: memberData } = useFetchUserInfo();

  const [chatList, setChatList] = useState<Chat.DTO[]>([]);
  const [messageContent, setMessageContent] = useState("");
  const { query } = useRouter();
  const classNum = (query.roomId as string) || "";

  const { client: stompClient, newMessage } = useWebsocket();

  const { data, fetchNextPage, hasNextPage, isLoading, isSuccess } =
    useClassChat({
      classNumber: classNum
    });

  useEffect(() => {
    if (newMessage) {
      setChatList(item => [...item, newMessage]);
    }
  }, [newMessage]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight
      });
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight
    });
  }, [chatList]);

  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };
    const message = {
      messageContent
    };

    if (stompClient) {
      stompClient.send(
        `/pub/class/${classNum}`,
        header,
        JSON.stringify(message)
      );

      setMessageContent("");
    }
  };

  return (
    <>
      <Styled.ChatListWithInfinityScroll>
        <InfiniteScroll
          pageStart={0}
          loadMore={page => {
            if (!isLoading && hasNextPage) fetchNextPage();
          }}
          hasMore={isLoading || hasNextPage}
          isReverse
        >
          {data?.pages?.map(({ classChatList }, index) =>
            classChatList
              .sort((a, b) =>
                dayjs(a.messageSendingTime).diff(b.messageSendingTime)
              )
              .map(chat => (
                <ChatBox
                  key={`${chat.messageSendingTime}-${index}`}
                  showProfile
                  {...chat}
                  currentUserEmail={memberData?.result?.email || ""}
                />
              ))
          )}
          {chatList.map((chat, index) => (
            <ChatBox
              key={`${chat.messageSendingTime}-${index}`}
              showProfile
              {...chat}
              currentUserEmail={memberData?.result?.email || ""}
            />
          ))}
        </InfiniteScroll>
      </Styled.ChatListWithInfinityScroll>

      <Styled.InputContainer as="form" onSubmit={sendMessage}>
        <Styled.PlusButton svgName="chatPlus" />
        <Styled.InputBox
          value={messageContent}
          onChange={e => setMessageContent(e.target.value)}
        />
        <button type="button" onClick={sendMessage}>
          <Styled.InputButton svgName="chatEnter" />
        </button>
      </Styled.InputContainer>
    </>
  );
};
