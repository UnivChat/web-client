import { useAppSelector } from "@client-state/hooks";
import type { CompatClient } from "@stomp/stompjs";
import { Stomp } from "@stomp/stompjs";
import { getCookie } from "cookies-next";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import SockJS from "sockjs-client";
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
  addMessage: (message: Message) => null
});

export function WebSocketProvider({ children }: any) {
  const stompClient = useMemo(
    () => Stomp.over(new SockJS(process.env.NEXT_PUBLIC_SOCKET_API_URL)),
    []
  );
  const { classNum } = useAppSelector(state => state.classNumber);
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback((message: Message) => {
    setMessages(prevMessages => [...prevMessages, message]);

    return null;
  }, []);

  useEffect(() => {
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };

    stompClient.connect(header, () => {
      stompClient.subscribe(`/sub/class/${classNum}`, greeting => {
        const message: Message = JSON.parse(greeting.body);
        addMessage(message);
      });
    });

    return () => {
      stompClient.deactivate();
    };
  }, [stompClient, classNum, addMessage]);

  const contextValue = useMemo(() => {
    return { client: stompClient, messages, addMessage };
  }, [addMessage, messages, stompClient]);

  return (
    <WebSocketContext.Provider value={contextValue}>
      {children}
    </WebSocketContext.Provider>
  );
}

export const useWebsocket = () => useContext(WebSocketContext);
