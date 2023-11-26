import type { CompatClient } from "@stomp/stompjs";
import { Stomp } from "@stomp/stompjs";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import SockJS from "sockjs-client";
import { AC_TOKEN_KEY } from "~/constants";

const WebSocketContext = createContext<{
  client: CompatClient | null;
  newMessage: Chat.DTO | null;
}>({
  client: null,
  newMessage: null
});

export function WebSocketProvider({ children }: PropsWithChildren) {
  const stompClient = useMemo(
    () => Stomp.over(new SockJS(process.env.NEXT_PUBLIC_SOCKET_API_URL)),
    []
  );
  const { query } = useRouter();
  const classNum = useMemo(
    () => query.roomId?.toString() || "",
    [query.roomId]
  );

  const [newMessage, setNewMessage] = useState<Chat.DTO | null>(null);

  useEffect(() => {
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };

    stompClient.connect(header, () => {
      stompClient.subscribe(`/sub/class/${classNum}`, greeting => {
        const message: Chat.DTO = JSON.parse(greeting.body);
        setNewMessage(message);
      });
    });
  }, [stompClient, classNum]);

  useEffect(() => {
    return () => {
      if (stompClient.connected) stompClient.deactivate();
    };
  }, [stompClient]);

  const contextValue = useMemo(() => {
    return { client: stompClient, newMessage };
  }, [newMessage, stompClient]);

  return (
    <WebSocketContext.Provider value={contextValue}>
      {children}
    </WebSocketContext.Provider>
  );
}

export const useWebsocket = () => useContext(WebSocketContext);
