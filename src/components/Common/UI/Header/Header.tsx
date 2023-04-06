import { Container, Title } from "./Header.styles";
import type { HeaderProps } from "./Header.types";
import LeftButton from "./LeftButton";

const Header = ({ title, location, leftButton }: HeaderProps) => {
  const leftButtonType = leftButton || (location ? "back" : null);
  /* 오른쪽 버튼(홈)으로 가기 위한 코드 */
  // const rightButtonType = rightButton || (location ? "home" : null);
  return (
    <Container>
      <LeftButton type={leftButtonType} />
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
