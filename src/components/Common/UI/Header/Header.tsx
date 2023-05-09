import type { HeaderProps } from "./Header.types";
import * as Styled from "./Header.styles";
import { BackButton } from "./BackButton";
import { RightButton } from "./RightButton";

const Header = ({ title, hasBackButton, rightButton }: HeaderProps) => {
  return (
    <>
      <Styled.Container>
        <div>
          {hasBackButton && <BackButton />}
          <Styled.Title>{title}</Styled.Title>
        </div>
        {rightButton && <RightButton rightButton={rightButton} />}
      </Styled.Container>
      <Styled.MarginContainer />
    </>
  );
};

export default Header;
