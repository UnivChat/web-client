import * as Styled from "./ChatRoom.styles";
import type { ChatRoomProps } from "./ChatRoom.types";

const ChatBox = ({ sender, gender, children }: ChatRoomProps) => {
  return <Styled.ChatText>{children}</Styled.ChatText>;
};

export const ChatEach = (ChatProps: ChatRoomProps) => {
  return (
    <div>
      <ChatBox sender={ChatProps.sender} gender={ChatProps.gender}>
        {ChatProps.children}
      </ChatBox>
    </div>
  );
};
