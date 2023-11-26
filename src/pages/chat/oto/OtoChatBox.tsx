import {
  ChatBox,
  ChatCount,
  ChatCountContainer,
  ChatTime,
  Title
} from "../class/class.styles";
import * as Styled from "./OtoChatBox.styles";

const OtoChatBox = () => {
  return (
    <Styled.ChatBox>
      <Styled.Container>
        <Styled.Title>이가대</Styled.Title>

        <Styled.RightContainer>
          <ChatTime>오후 11:30</ChatTime>
          <ChatCountContainer>
            <ChatCount>6</ChatCount>
          </ChatCountContainer>
        </Styled.RightContainer>
      </Styled.Container>
    </Styled.ChatBox>
  );
};

export default OtoChatBox;
