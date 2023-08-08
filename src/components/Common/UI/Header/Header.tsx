import type { HeaderProps } from "./Header.types";
import * as Styled from "./Header.styles";
import { Back, Plus } from "./items";

export const Header = ({
  title,
  subTitle,
  element: { left, right } = {}
}: HeaderProps) => {
  return (
    <>
      <Styled.Header>
        <div>
          {left}
          <Styled.Title>{title}</Styled.Title>
          <Styled.SubTitle>{subTitle}</Styled.SubTitle>
        </div>
        {right}
      </Styled.Header>
      <Styled.MarginContainer />
    </>
  );
};

Header.Back = Back;
Header.Plus = Plus;
