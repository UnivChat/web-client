import type { HeaderProps } from "./Header.types";
import * as Styled from "./Header.styles";
import { BackButton } from "./BackButton";

const Header = ({ title, hasBackButton }: HeaderProps) => {
  return (
    <Styled.Container>
      {hasBackButton && <BackButton />}
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};

export default Header;
