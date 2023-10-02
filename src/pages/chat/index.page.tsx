import { pxToRem } from "~/utils";
import type { NextPageWithLayout } from "../app.types";
import * as Styled from "./chat.styles";

const ChatPage: NextPageWithLayout = () => {
  return (
    <Styled.Container>
      {/* 라이브 채팅 박스 */}
      <p
        css={{
          fontSize: pxToRem(18),
          fontFamily: "NanumSquare"
        }}
      >
        현재 준비 중에 있는 기능입니다.
      </p>
    </Styled.Container>
  );
};

export default ChatPage;

ChatPage.layoutConfig = {
  case: "tab"
};
