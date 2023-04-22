import * as Styled from "./auth.styles";
 
const Header = () => <Styled.Header>회원가입</Styled.Header>;

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
      <Styled.BodyTopNumber opacity={step === 1 ? 1 : 0.6}>1</Styled.BodyTopNumber>
        <BodyTopsDots />
      <Styled.BodyTopNumber opacity={step === 2 ? 1 : 0.6}>2</Styled.BodyTopNumber>
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
    isIdInput,
    ...props
  }: {
    type: string;
    name: string;
    required: boolean;
    isIdInput?: boolean;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
  }) => {
    return <Styled.Input type={type} name={name} required={required} isIdInput={isIdInput} {...props} />;
  };
  
  // input title
  const CustomText = ({
    children,
    isGenderText,
  }: {
    children: string;
    isGenderText?: boolean;
  }) => {
    return <Styled.Text isGenderText={isGenderText}>{children}</Styled.Text>;
  };

  // 경고 메세지
  const WarningMessage = ({ children }: { children: string }) => {
    return <Styled.WarningMessage>{children}</Styled.WarningMessage>;
  };
  
  // 제출 버튼
  const SubmitButton = ({ children, onClick }: { children: string; onClick?: () => void }) => {
    return <Styled.SubmitButton onClick={onClick}>{children}</Styled.SubmitButton>;
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