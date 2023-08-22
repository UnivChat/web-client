import * as Styled from "./ChatRoom.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import * as Header from "~/components/Common/UI/Header/Header";
import * as ChatDetail from "./ChatRoom";

//<Header.Header title="기숙사 채팅" hasBackButton />
const Inquiry: NextPageWithLayout = () => {
  return (
    <Styled.Container>
      <Styled.ChatContainer>
        <Styled.ChatHr />
        <ChatDetail.ChatEach sender="other" gender="female">
          채팅테스트채팅테스트채팅테스트채팅테스트
        </ChatDetail.ChatEach>
        <ChatDetail.ChatEach sender="me">채팅테스트</ChatDetail.ChatEach>
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
