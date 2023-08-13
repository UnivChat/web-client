import * as Styled from "./ChatRoom.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import Header from "~/components/Common/UI/Header/Header";
import * as ChatDetail from "./ChatRoom";

const Inquiry: NextPageWithLayout = () => {
  return (
    <Styled.Container>
      <Header title="기숙사 채팅" hasBackButton />
      <Styled.ChatContainer>
        <Styled.ChatHr />
        <ChatDetail.ChatEach sender="other" gender="female">
          채팅테스트채팅테스트채팅테스트채팅테스트채팅테스트채팅테스트채팅테스트채팅테스트채팅테스트채팅테스트
        </ChatDetail.ChatEach>
        <ChatDetail.ChatEach sender="me">채팅테스트</ChatDetail.ChatEach>
      </Styled.ChatContainer>
    </Styled.Container>
  );
};

export default Inquiry;

Inquiry.layoutConfig = {
  case: "default"
};
