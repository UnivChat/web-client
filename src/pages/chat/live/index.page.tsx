import { Header } from "~/components/Common/UI/Header/Header";
import type { NextPageWithLayout } from "~/pages/app.types";
import * as Styled from "../room/Room.styles";

const LiveChatPage: NextPageWithLayout = () => {
  return (
    <Styled.Container>
      <Header.Back title="라이브 채팅" subTitle="32" bgColor="#FFF" />
      <Styled.Alert svgName="alert" />
      <Styled.ChatContainer></Styled.ChatContainer>

      <Styled.InputContainer>
        <Styled.PlusButton svgName="chatPlus" />
        <Styled.InputBox />
        <button type="button">
          <Styled.InputButton svgName="chatEnter" />
        </button>
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default LiveChatPage;

LiveChatPage.layoutConfig = {
  case: "default"
};
