import React from "react";
import type { NextPageWithLayout } from "../../app.types";
import * as Styled from "./class.styles";
import ClassChatBox from "./ClassChatBox";

const ClassChatPage: NextPageWithLayout = () => {
  return (
    <Styled.Container>
      <ClassChatBox
        title="일반수학1및연습 [분반]"
        subTitle="화 2~3(N301)"
        chatCount={5}
        chatTime="10:22"
      />
      <ClassChatBox
        title="일반수학1및연습 [분반]"
        subTitle="화 2~3(N301)"
        chatCount={5}
        chatTime="10:22"
      />
      <ClassChatBox
        title="일반수학1및연습 [분반]"
        subTitle="화 2~3(N301)"
        chatCount={5}
        chatTime="10:22"
      />
    </Styled.Container>
  );
};

export default ClassChatPage;

ClassChatPage.layoutConfig = {
  case: "tab"
};
