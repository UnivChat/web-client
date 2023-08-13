import * as Styled from "./ChatRoom.styles";
import type { ChatRoomProps } from "./ChatRoom.types";

export const ChatEach = (ChatProps: ChatRoomProps) => {
  return (
    <Styled.ChatBox>
      <Styled.ChatProfile sender={ChatProps.sender} gender={ChatProps.gender} />
      <Styled.ChatName>익명1</Styled.ChatName>
      <Styled.ChatText sender={ChatProps.sender} gender={ChatProps.gender}>
        {ChatProps.children}
      </Styled.ChatText>
    </Styled.ChatBox>
  );
};
