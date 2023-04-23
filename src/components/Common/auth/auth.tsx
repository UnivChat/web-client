import type { PropsWithChildren } from "react";
import * as Styled from "./auth.styles";

const Header = ({ text }: { text: string }) => {
  return <Styled.Header>{text}</Styled.Header>;
};

// ... 부분
const BodyTopsDots = () => {
  return (
    <Styled.BodyTopDots>
      <Styled.Dot>•</Styled.Dot>
      <Styled.Dot>•</Styled.Dot>
      <Styled.Dot>•</Styled.Dot>
    </Styled.BodyTopDots>
  );
};

// form 윗부분
const BodyTop = ({ step }: { step: number }) => (
  <Styled.BodyTop>
    <Styled.BodyTopWrapper>
      <Styled.BodyTopNumber opacity={step === 1 ? 1 : 0.6}>
        1
      </Styled.BodyTopNumber>
      <BodyTopsDots />
      <Styled.BodyTopNumber opacity={step === 2 ? 1 : 0.6}>
        2
      </Styled.BodyTopNumber>
    </Styled.BodyTopWrapper>
    <Styled.BodyTopText>
      {step === 1 ? "기본 정보를 입력해주세요" : "학교 이메일을 인증해주세요"}
    </Styled.BodyTopText>
  </Styled.BodyTop>
);

// input
const CustomInput = ({
  type,
  name,
  required,
  width,
  ...props
}: {
  type: string;
  name: string;
  required: boolean;
  width?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <Styled.Input
      type={type}
      name={name}
      required={required}
      width={width}
      {...props}
    />
  );
};

// input title
const CustomText = ({
  children,
  marginTop
}: PropsWithChildren<{ marginTop?: string }>) => {
  return <Styled.Text marginTop={marginTop}>{children}</Styled.Text>;
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

export {
  Header,
  BodyTopsDots,
  BodyTop,
  CustomInput,
  CustomText,
  WarningMessage,
  SubmitButton
};
