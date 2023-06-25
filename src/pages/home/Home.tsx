import React from "react";
import * as Styled from "./Home.styles";
import { SelectionProps } from "./Home.types";

const Selection = (ContainerProps: SelectionProps) => {
  const content = (
    <Styled.SelectBox>
      <Styled.SelectButton>
        <Styled.SelectIcon svgName={ContainerProps.svgName} />
      </Styled.SelectButton>
      <Styled.SelectText>{ContainerProps.name}</Styled.SelectText>
    </Styled.SelectBox>
  );
  return content;
};

export const Home = () => {
  return (
    <Styled.Container>
      <Styled.Title>CAT CHAT</Styled.Title>
      <Styled.SelectContainer>
        <Selection name="오늘의 식단" svgName="food" />
        <Styled.SelectLine />
        <Selection name="도서관 자리" svgName="library" />
        <Styled.SelectLine />
        <Selection name="연락망" svgName="contact" />
        <Styled.SelectLine />
        <Selection name="편의시설" svgName="facility" />
      </Styled.SelectContainer>
    </Styled.Container>
  );
};
