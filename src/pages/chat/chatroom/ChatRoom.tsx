import * as Styled from "./ChatRoom.styles";
import type { ChatRoomProps } from "./ChatRoom.types";

const UserProfile = (ChatProps: ChatRoomProps) => {
  return (
    <Styled.ChatProfile sender={ChatProps.sender} gender={ChatProps.gender}>
      <Styled.ProfileDetail1 />
      <Styled.ProfileDetail2 />
    </Styled.ChatProfile>
  );
};
const UserInfo = (ChatProps: ChatRoomProps) => {
  return (
    <div>
      <UserProfile sender={ChatProps.sender} gender={ChatProps.gender} />
      <Styled.ChatName sender={ChatProps.sender} gender={ChatProps.gender}>
        익명1
      </Styled.ChatName>
    </div>
  );
};

export const ChatEach = (ChatProps: ChatRoomProps) => {
  return (
    <Styled.ChatBox sender={ChatProps.sender} gender={ChatProps.gender}>
      {ChatProps.sender == "other" ? (
        <UserInfo sender={ChatProps.sender} gender={ChatProps.gender} />
      ) : null}
      <Styled.ChatText sender={ChatProps.sender} gender={ChatProps.gender}>
        {ChatProps.children}
      </Styled.ChatText>
    </Styled.ChatBox>
  );
};
