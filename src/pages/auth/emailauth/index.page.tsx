import * as CommonComponents from "~/components/Common/auth/auth";
import { Body, Container } from "~/components/Common/auth/auth.styles";
import * as Styled from "./emailAuth.styles";
import { useEmailAuth } from "./emailAuth.hooks";

const { Header, BodyTop, BodyTopsDots, CustomInput, CustomText, SubmitButton } =
  CommonComponents;

const EmailAuth = () => {
  const {
    isEmailAuthButtonClicked,
    emailAuthButtonBgColor,
    handleEmailAuthButtonClick
  } = useEmailAuth();

  return (
    <Container>
      <Header text="회원가입"/>
      <Body>
        <BodyTop step={2} />

        <Styled.BodyForm>
          <CustomText>이메일을 입력해주세요</CustomText>
          <CustomInput type="email" name="email" required />
        </Styled.BodyForm>
        <Styled.CheckAuthButton
          style={{ backgroundColor: emailAuthButtonBgColor }}
          onClick={handleEmailAuthButtonClick}
        >
          이메일 주소를 인증합니다
        </Styled.CheckAuthButton>
        {isEmailAuthButtonClicked && (
          <>
            <Styled.Message>
              입력하신 이메일로 인증번호가 전송되었습니다
            </Styled.Message>
            <Styled.Span>
              <BodyTopsDots />
            </Styled.Span>

            <Styled.BodyForm>
              <CustomText>인증번호를 입력해주세요</CustomText>
              <CustomInput type="text" name="emailAuth" required />
            </Styled.BodyForm>
            <Styled.CheckAuthButton>인증하기</Styled.CheckAuthButton>
          </>
        )}
        <SubmitButton>시작하기</SubmitButton>
      </Body>
    </Container>
  );
};

export default EmailAuth;
