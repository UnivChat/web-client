import React from "react";
import type { ChangeEventHandler } from "react";
import * as Styled from "./Search.styles";

interface SearchProps {
  value: string;
  onSearch: (value: string) => void;
}

export const Search = ({ value, onSearch }: SearchProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    onSearch(e.target.value);
  };

  return (
    <Styled.SearchContainer>
      <Styled.SearchIcon />
      <Styled.SearchInput
        type="text"
        placeholder="클래스를 검색하세요"
        value={value}
        onChange={handleChange}
      />
    </Styled.SearchContainer>
  );
};
