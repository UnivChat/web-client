import React from "react";
import type { NextPageWithLayout } from "../app.types";
import * as Styled from "./class.styles";

const ClassChatPage: NextPageWithLayout = () => {
  return (
    <Styled.Container>
      <Styled.ClassBox>
        <div>
          <Styled.Title>일반수학1및연습 [분반]</Styled.Title>
          <Styled.SubTitle>10:22</Styled.SubTitle>
        </div>
        <div>
          <Styled.SubTitle>화 2~3(N301)</Styled.SubTitle>
          <Styled.SubTitle>5</Styled.SubTitle>
        </div>
      </Styled.ClassBox>
    </Styled.Container>
  );
};

export default ClassChatPage;

ClassChatPage.layoutConfig = {
  case: "tab"
};
