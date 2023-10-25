import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AC_TOKEN_KEY } from "~/constants";
import type { NextPageWithLayout } from "~/pages/app.types";
import { ChatBox } from "~/components/Chat/ChatBox";
import { Header } from "~/components/Common/UI/Header/Header";
import { useWebsocket } from "./class.provider";
import * as Styled from "./Room.styles";

const ChatRoomPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [classNumber, setClassNumber] = useState<string | null>(null);
  const title = query.title as string;

  useEffect(() => {
    if (query.roomId) {
      setClassNumber(String(query.roomId));
    }
  }, [query]);

  const stompClient = useWebsocket();
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };
    const message = {
      memberNickname: "nick",
      messageContent: "message"
    };

    if (stompClient) {
      console.log("SEND!!");
      stompClient.send(
        `/pub/class/${classNumber}`,
        header,
        JSON.stringify(message)
      );
    }
  };

  const DUMMY_CHAT_LIST = [
    {
      memberNickname: "minsoo",
      messageContent:
        "채팅 더미 1 채팅 더미 1 채팅 더미 1 채팅 더미 1 채팅 더미 1채팅 더미 1 채팅 더미 1 채팅 더미 1 채팅 더미 1 ",
      messageSendingTime: "2023-02-11"
    },
    {
      memberNickname: "minsoo2",
      messageContent: "채팅 더미 2",
      messageSendingTime: "2023-02-11"
    },
    {
      memberNickname: "minsoo3",
      messageContent: "채팅 더미 3",
      messageSendingTime: "2023-02-11"
    }
  ];

  return (
    // {JSON.stringify(messages)}
    <div>
      <Styled.Container>
        <Header.Back title={title} subTitle="32" bgColor="#FFF" />
        <Styled.Alert svgName="alert" />
        <Styled.ChatContainer>
          <Styled.ChatHr />
          <Styled.Date>2023/09/11</Styled.Date>
          {DUMMY_CHAT_LIST.map((chat, index) => (
            <ChatBox key={`${chat.messageSendingTime}-${index}`} {...chat} />
          ))}
          과목코드: {classNumber}
        </Styled.ChatContainer>

        <Styled.InputContainer>
          <Styled.PlusButton svgName="chatPlus" />
          <Styled.InputBox />
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
