import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { ChangeEventHandler } from "react";
import { AC_TOKEN_KEY } from "~/constants";
import type { NextPageWithLayout } from "~/pages/app.types";
import { useMemberSearch } from "@server-state/class/hooks/memberSearch.queries";
import { useClassChat } from "@server-state/class/hooks/classChat.queries";
import { ChatBox } from "~/components/Chat/ChatBox";
import { Header } from "~/components/Common/UI/Header/Header";
import { useWebsocket } from "./class.provider";
import * as Styled from "./Room.styles";

interface ChatListType {
  memberEmail: string;
  memberNickname: string;
  messageContent: string;
  messageSendingTime: string;
}

const ChatRoomPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [classNumber, setClassNumber] = useState<string>("");
  const title = query.title as string;

  useEffect(() => {
    if (query.roomId) {
      setClassNumber(String(query.roomId));
    }
  }, [query]);

  // 멤버조회
  const { data: memberData } = useMemberSearch();
  const memberEmail = memberData?.result?.email;

  // 메세지 응답 임시 확인
  const { data, refetch } = useClassChat(classNumber, 0);
  const [chatList, setChatList] = useState<ChatListType[]>([]);
  useEffect(() => {
    if (data?.result?.classChatList) {
      // 새로운 메시지가 아래로 오도록
      setChatList([...data.result.classChatList].reverse());
    }
  }, [data]);

  const stompClient = useWebsocket();
  const [messages, setMessages] = useState<string>("");

  const messageContents: ChangeEventHandler<HTMLInputElement> = e => {
    setMessages(e.target.value);
  };

  const sendMessage = () => {
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };
    const message = { messageContent: messages };

    if (stompClient) {
      console.log("SEND!!");
      stompClient.send(
        `/pub/class/${classNumber}`,
        header,
        JSON.stringify(message)
      );
      refetch();
      setMessages("");
    }
  };

  return (
    <div>
      <Styled.Container>
        <Header.Back title={title} subTitle="32" bgColor="#FFF" />
        <Styled.Alert svgName="alert" />
        <Styled.ChatContainer>
          <Styled.ChatHr />
          <Styled.Date>2023/09/11</Styled.Date>
          {chatList?.map((chat, index) => (
            <ChatBox
              key={`${chat.messageSendingTime}-${index}`}
              {...chat}
              currentUserEmail={memberEmail}
            />
          ))}
        </Styled.ChatContainer>

        <Styled.InputContainer>
          <Styled.PlusButton svgName="chatPlus" />
          <Styled.InputBox value={messages} onChange={messageContents} />
          <button type="button" onClick={sendMessage}>
            <Styled.InputButton svgName="chatEnter" />
          </button>
        </Styled.InputContainer>
      </Styled.Container>
    </div>
  );
};

export default ChatRoomPage;

ChatRoomPage.layoutConfig = {
  case: "default"
};
