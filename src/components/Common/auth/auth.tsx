import type { PropsWithChildren } from "react";
import * as Styled from "./Auth.styles";

const Header = ({ text }: { text: string }) => {
  return <Styled.Header>{text}</Styled.Header>;
};

// 경고 메세지
const WarningMessage = ({ children }: PropsWithChildren) => {
  return <Styled.WarningMessage>{children}</Styled.WarningMessage>;
};

// 제출 버튼
const SubmitButton = ({
  children,
  onClick
}: PropsWithChildren<{ onClick?: () => void }>) => {
  return (
    <Styled.SubmitButton onClick={onClick}>{children}</Styled.SubmitButton>
  );
};

export { Header, WarningMessage, SubmitButton };
