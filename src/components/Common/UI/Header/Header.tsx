import * as Styled from "./Header.styles";
import type { HeaderProps } from "./Header.types";
import * as headerIcons from "./items";

export const Header = ({ title, subTitle, element }: HeaderProps) => {
  return (
    <>
      <Styled.Header>
        {element?.left}
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>{subTitle}</Styled.SubTitle>

        <div style={{ flex: 1 }} />
        {element?.right}
      </Styled.Header>
      <Styled.MarginContainer />
    </>
  );
};

// eslint-disable-next-line react/display-name
Header.Back = (props: Omit<HeaderProps, "element">) => (
  <Header
    {...props}
    element={{
      left: <headerIcons.Back />
    }}
  />
);
// Header.Plus = Plus;

export const HeaderIcon = ({ name }: { name: keyof typeof headerIcons }) => {
  // eslint-disable-next-line import/namespace
  return <>{headerIcons[name]()}</>;
};
