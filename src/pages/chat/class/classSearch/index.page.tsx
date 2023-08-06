import React from "react";
import Header from "~/components/Common/UI/Header/Header";
import * as Styled from "./classSearch.styles";
import { Search } from "./Search";
import { ClassBox } from "./ClassBox";

export default function ClassSearch() {
  return (
    <>
      <Header title="클래스 찾기" hasBackButton />
      <Styled.Container>
        <Search />
        <Styled.TitleContainer className="add-class">
          <Styled.Title>추가한 클래스</Styled.Title>
        </Styled.TitleContainer>
        <Styled.TitleDivider />
        <ClassBox
          svgName="minus"
          title="[05421 - 2345] 금융시장의 이해"
          subTitle="화1 M403 / 목 1 -2 M403 | 분반02"
        />
        <ClassBox
          svgName="minus"
          title="[05421 - 2345] 금융시장의 이해"
          subTitle="화1 M403 / 목 1 -2 M403 | 분반02"
        />
        <ClassBox
          svgName="minus"
          title="[05421 - 2345] 금융시장의 이해"
          subTitle="화1 M403 / 목 1 -2 M403 | 분반02"
        />

        <Styled.TitleContainer className="class">
          <Styled.Title>클래스</Styled.Title>
        </Styled.TitleContainer>
        <Styled.TitleDivider />
        <ClassBox
          svgName="plus"
          title="[05421 - 2345] 금융시장의 이해"
          subTitle="화1 M403 / 목 1 -2 M403 | 분반02"
        />
        <ClassBox
          svgName="plus"
          title="[05421 - 2345] 금융시장의 이해"
          subTitle="화1 M403 / 목 1 -2 M403 | 분반02"
        />
      </Styled.Container>
    </>
  );
}

ClassSearch.layoutConfig = {
  case: "tab"
};
