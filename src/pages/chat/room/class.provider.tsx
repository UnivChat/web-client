import { useAppSelector } from "@client-state/hooks";
import type { CompatClient, Frame } from "@stomp/stompjs";
import { Stomp } from "@stomp/stompjs";
import { getCookie } from "cookies-next";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type PropsWithChildren
} from "react";
import SockJS from "sockjs-client";
import { AC_TOKEN_KEY } from "~/constants";

const WebSocketContext = createContext<CompatClient | null>(null);

export function WebSocketProvider({ children }: PropsWithChildren) {
  const API_URL = process.env.NEXT_PUBLIC_SOKET_API_URL;
  const stompClient = useMemo(() => Stomp.over(new SockJS(API_URL)), [API_URL]);
  const { classNum } = useAppSelector(state => state.classNumber);

  useEffect(() => {
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };

    stompClient.activate();
    stompClient.connect(header, (frame: Frame) => {
      console.log(`Connected: ${frame}`);
      // 메시지 받는 방 url(구독)
      stompClient.subscribe(`/sub/class/${classNum}`, greeting => {
        // console.log(greeting)
        console.log("🔥🔥🔥🔥");
        console.log(`${JSON.stringify(greeting)}🔥🔥🔥🔥`);
      });
    });

    return () => {
      stompClient.deactivate();
    };
  }, [stompClient]);

  return (
    <WebSocketContext.Provider value={stompClient}>
      {children}
    </WebSocketContext.Provider>
  );
}

export const useWebsocket = () => useContext(WebSocketContext);
