import * as Styled from "./ChatRoom.styles";
import type { ChatRoomProps } from "./ChatRoom.types";

export const ChatEach = (ChatProps: ChatRoomProps) => {
  return (
    <Styled.ChatBox sender={ChatProps.sender} gender={ChatProps.gender}>
      <Styled.ChatText sender={ChatProps.sender} gender={ChatProps.gender}>
        {ChatProps.children}
      </Styled.ChatText>
    </Styled.ChatBox>
  );
};
