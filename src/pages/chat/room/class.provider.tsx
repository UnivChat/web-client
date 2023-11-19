import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo
} from "react";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import type { CompatClient } from "@stomp/stompjs";
import { getCookie } from "cookies-next";
import { useAppSelector } from "@client-state/hooks";
import { AC_TOKEN_KEY } from "~/constants";

// 메시지 타입 정의
interface Message {
  memberEmail: string;
  memberNickname: string;
  messageContent: string;
  messageSendingTime: string;
}

const WebSocketContext = createContext({
  client: null as CompatClient | null,
  messages: [] as Message[],
  addMessage: (message: Message) => {}
});

export function WebSocketProvider({ children }: any) {
  const API_URL = process.env.NEXT_PUBLIC_SOKET_API_URL;
  const stompClient = useMemo(() => Stomp.over(new SockJS(API_URL)), [API_URL]);
  const { classNum } = useAppSelector(state => state.classNumber);
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  useEffect(() => {
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };

    stompClient.connect(header, frame => {
      stompClient.subscribe(`/sub/class/${classNum}`, greeting => {
        const message: Message = JSON.parse(greeting.body);
        addMessage(message);
      });
    });

    return () => {
      stompClient.deactivate();
    };
  }, [stompClient, classNum]);

  return (
    <WebSocketContext.Provider
      value={{ client: stompClient, messages, addMessage }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

export const useWebsocket = () => useContext(WebSocketContext);
