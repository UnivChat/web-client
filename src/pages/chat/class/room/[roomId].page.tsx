/* eslint-disable react/no-array-index-key */
import { setClassNum } from "@client-state/Chat/classNumberSlice";
import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import { useClassChat } from "@server-state/class/hooks/classChat.queries";
import { useMemberSearch } from "@server-state/class/hooks/memberSearch.queries";
import { getCookie } from "cookies-next";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import type { ChangeEventHandler } from "react";
import { useEffect, useState } from "react";
import { ChatBox } from "~/components/Chat/ChatBox";
import ChatToast from "~/components/Chat/ChatToast/ChatToast";
import { Header } from "~/components/Common/UI/Header/Header";
import { AC_TOKEN_KEY } from "~/constants";
import type { NextPageWithLayout } from "~/pages/app.types";
import * as Styled from "./Room.styles";
import { useWebsocket } from "./class.provider";

interface ChatListType {
  memberEmail: string;
  memberNickname: string;
  messageContent: string;
  messageSendingTime: string;
}

const ChatRoomPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const dispatch = useAppDispatch();
  const { otoModalState } = useAppSelector(state => state.otoModal);
  const { classNum } = useAppSelector(state => state.classNumber);
  const title = query.title as string;
  const { numberOfParticipant } = query;

  useEffect(() => {
    if (query.roomId) {
      dispatch(setClassNum(String(query.roomId)));
    }
  }, [dispatch, query]);

  // 멤버 조회
  const { data: memberData } = useMemberSearch();
  const memberEmail = memberData?.result?.email;

  // 메시지 응답 임시 확인
  const { data, refetch } = useClassChat(classNum, 0); // TODO: 메세지 10개 이상일 때 페이지 수정필요
  const [chatList, setChatList] = useState<ChatListType[]>([]);

  useEffect(() => {
    if (data?.result?.classChatList) {
      setChatList([...data.result.classChatList].reverse());
    }
  }, [data]);

  const { client: stompClient, messages: receivedMessages } = useWebsocket();

  useEffect(() => {
    // 새 메시지를 기존 채팅 목록에 추가하기 전에 중복을 확인합니다.
    const newMessages = receivedMessages.filter(
      receivedMessage =>
        !chatList.some(
          chatMessage =>
            chatMessage.messageSendingTime ===
            receivedMessage.messageSendingTime
        )
    );

    if (newMessages.length > 0) {
      setChatList(prevChatList =>
        [...prevChatList, ...newMessages].sort((a, b) =>
          dayjs(a.messageSendingTime).diff(dayjs(b.messageSendingTime))
        )
      );
    }
  }, [chatList, receivedMessages]);

  const [messageContent, setMessageContent] = useState<string>("");

  const handleMessageContentChange: ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setMessageContent(e.target.value);
  };

  const sendMessage = () => {
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };
    const message = { messageContent };

    if (stompClient) {
      stompClient.send(
        `/pub/class/${classNum}`,
        header,
        JSON.stringify(message)
      );
      refetch();
      setMessageContent("");
    }
  };

  return (
    <Styled.Container>
      {otoModalState ? <ChatToast /> : null}
      <Header.Back
        title={title}
        subTitle={numberOfParticipant?.toString()}
        bgColor="#FFF"
      />
      <Styled.Alert svgName="alert" />
      <Styled.ChatContainer>
        {chatList?.map((chat, index) => (
          <ChatBox
            key={`${chat.messageSendingTime}-${index}`}
            showProfile={
              index === 0 ||
              chatList[index - 1].memberEmail !== chat.memberEmail
            }
            {...chat}
            currentUserEmail={memberEmail}
          />
        ))}
      </Styled.ChatContainer>

      <Styled.InputContainer>
        <Styled.PlusButton svgName="chatPlus" />
        <Styled.InputBox
          value={messageContent}
          onChange={handleMessageContentChange}
        />
        <button type="button" onClick={sendMessage}>
          <Styled.InputButton svgName="chatEnter" />
        </button>
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default ChatRoomPage;

ChatRoomPage.layoutConfig = {
  case: "default"
};
