import { ChatBox } from "~/components/Chat/ChatBox";
import type { NextPageWithLayout } from "~/pages/app.types";
import * as Styled from "./ChatRoom.styles";

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

// <Header.Header title="기숙사 채팅" hasBackButton />
const Inquiry: NextPageWithLayout = () => {
  return (
    <Styled.Container>
      <Styled.ChatContainer>
        {DUMMY_CHAT_LIST.map(chat => (
          <ChatBox key={chat.messageSendingTime} {...chat} />
        ))}
      </Styled.ChatContainer>

      <Styled.InputContainer>
        <Styled.InputBox />
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default Inquiry;

Inquiry.layoutConfig = {
  case: "default"
};
