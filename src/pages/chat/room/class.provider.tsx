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
  const stompClient = useMemo(
    () =>
      Stomp.over(
        new SockJS(
          "http://catchateb-env-1.eba-skeqnc47.ap-northeast-2.elasticbeanstalk.com:8080/chat"
        )
      ),
    []
  );

  useEffect(() => {
    const header = { Authorization: `Bearer ${getCookie(AC_TOKEN_KEY)}` };

    stompClient.activate();
    stompClient.connect(header, (frame: Frame) => {
      console.log(`Connected: ${frame}`);
      // 메시지 받는 방 url(구독)
      stompClient.subscribe(`/sub/class/00036-01`, greeting => {
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
