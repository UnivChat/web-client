import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AC_TOKEN_KEY } from "~/constants";
import type { NextPageWithLayout } from "~/pages/app.types";
import { useWebsocket } from "./class.provider";

const ChatRoomPage: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [classNumber, setClassNumber] = useState<string | null>(null);

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
      stompClient.send(`/pub/class/00036-01`, header, JSON.stringify(message));
    }
  };

  return (
    <div>
      classNumber: {classNumber}
      {JSON.stringify(messages)}
      <button type="button" onClick={sendMessage}>
        butto
      </button>
    </div>
  );
};

export default ChatRoomPage;

ChatRoomPage.layoutConfig = {
  case: "default"
};
