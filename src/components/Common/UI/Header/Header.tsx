import type { HeaderProps } from "./Header.types";
import BackButton from "./BackButton";
import * as Styled from "./Header.styles";

const Header = ({ title, hasBackButton }: HeaderProps) => {
  return (
    <Styled.Container>
      {hasBackButton && <BackButton />}
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};

export default Header;
