import React from "react";
import { Header } from "~/components/Common/UI/Header/Header";
import * as Styled from "./classSearch.styles";
import { Search } from "./Search";
import { ClassBox } from "./ClassBox";

const dummyData = [
  {
    title: "[05421 - 2345] 금융시장의 이해",
    subTitle: "화1 M403 / 목 1 -2 M403 | 분반02"
  },
  {
    title: "[05421 - 2345] 금융시장의 이해",
    subTitle: "화1 M403 / 목 1 -2 M403 | 분반02"
  },
  {
    title: "[05421 - 2345] 금융시장의 이해",
    subTitle: "화1 M403 / 목 1 -2 M403 | 분반02"
  }
];

export default function ClassSearch() {
  return (
    <>
      <Header title="클래스 찾기" element={{ left: <Header.Back /> }} />
      <Styled.Container>
        <Search />
        <Styled.TitleContainer className="add-class">
          <Styled.Title>추가한 클래스</Styled.Title>
        </Styled.TitleContainer>
        <Styled.TitleDivider />
        {dummyData.map(data => (
          <ClassBox
            key={data.title}
            title={data.title}
            subTitle={data.subTitle}
            svgName="minus"
          />
        ))}
        <Styled.TitleContainer className="class">
          <Styled.Title>클래스</Styled.Title>
        </Styled.TitleContainer>
        <Styled.TitleDivider />
        {dummyData.map(data => (
          <ClassBox
            key={data.title}
            title={data.title}
            subTitle={data.subTitle}
            svgName="plus"
          />
        ))}
      </Styled.Container>
    </>
  );
}

ClassSearch.layoutConfig = {
  case: "tab"
};
