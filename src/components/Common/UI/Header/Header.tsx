import { Container, Title } from "./Header.styles";
import type { HeaderProps } from "./Header.types";
import BackButton from "./BackButton";

const Header = ({ title, hasBackButton }: HeaderProps) => {
  return (
    <Container>
      {hasBackButton && <BackButton />}
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
