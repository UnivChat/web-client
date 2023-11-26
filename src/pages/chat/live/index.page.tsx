import { useFetchUserInfo } from "@server-state/auth/hooks/auth.queries";
import { Stomp } from "@stomp/stompjs";
import { getCookie } from "cookies-next";
import dayjs from "dayjs";
import type { FormEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import SockJS from "sockjs-client";
import { ChatBox } from "~/components/Chat/ChatBox";
import { Header } from "~/components/Common/UI/Header/Header";
import { AC_TOKEN_KEY } from "~/constants";
import type { NextPageWithLayout } from "~/pages/app.types";
import * as Styled from "../class/room/Room.styles";

const LiveChatPage: NextPageWithLayout = () => {
  const [messages, setMessages] = useState<Chat.DTO[]>([]);
  const [chat, setChat] = useState("");

  const stompClient = useRef(
    Stomp.over(new SockJS(process.env.NEXT_PUBLIC_SOCKET_API_URL))
  );
  const { data } = useFetchUserInfo();

  const header = useMemo(() => {
    return {
      Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}`
    };
  }, []);

  useEffect(() => {
    const lastMessage = messages.at(-1);
    if (lastMessage && lastMessage.memberEmail === data?.result.email)
      window.scrollTo({
        top: document.body.clientHeight,
        behavior: "smooth"
      });
  }, [data?.result.email, messages]);

  useEffect(() => {
    const socket = stompClient.current;

    socket.connect(header, () => {
      socket.subscribe(`/sub/live`, greeting => {
        const message: Chat.DTO = JSON.parse(greeting.body);
        setMessages(messages => [...messages, message]);
      });
    });

    return () => {
      socket.deactivate();
    };
  }, [header]);

  const onClick = (e: FormEvent) => {
    e.preventDefault();
    if (stompClient) {
      stompClient.current.send(
        "/sub/live",
        header,
        JSON.stringify({
          memberEmail: data?.result.email || "",
          memberNickname: data?.result.nickname || "",
          messageContent: chat,
          messageSendingTime: dayjs().toString()
        } satisfies Chat.DTO)
      );
    }
    setChat("");
  };

  return (
    <Styled.Container>
      <Header.Back title="라이브 채팅" subTitle="32" bgColor="#FFF" />
      <Styled.Alert svgName="alert" />

      <Styled.ChatContainer>
        {messages.map(message => (
          <ChatBox
            key={message.messageSendingTime + message.messageContent}
            {...message}
            currentUserEmail={data?.result.email || ""}
          />
        ))}
      </Styled.ChatContainer>

      <Styled.InputContainer as="form" onSubmit={onClick}>
        <Styled.PlusButton svgName="chatPlus" />
        <Styled.InputBox value={chat} onChange={e => setChat(e.target.value)} />
        <button type="button" onClick={onClick}>
          <Styled.InputButton svgName="chatEnter" />
        </button>
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default LiveChatPage;

LiveChatPage.layoutConfig = {
  case: "default"
};
