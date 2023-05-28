import React from "react";
import * as Styled from "./Search.styles";

export const Search = () => {
  return (
    <Styled.SearchContainer>
      <Styled.SearchIcon />
      <Styled.SearchInput type="input" placeholder="클래스를 검색하세요" />
    </Styled.SearchContainer>
  );
};
