import * as CommonComponents from "~/components/Common/auth/auth";
import {
  Body,
  BodyForm,
  CheckAuthButton,
  Container,
  Message,
  Span
} from "~/components/Common/auth/auth.styles";
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
      <Header text="회원가입" />
      <Body>
        <BodyTop step={2} />

        <BodyForm paddingTop={38} paddingBottom={8}>
          <CustomText>이메일을 입력해주세요</CustomText>
          <CustomInput type="email" name="email" required />
        </BodyForm>
        <CheckAuthButton
          style={{ backgroundColor: emailAuthButtonBgColor }}
          onClick={handleEmailAuthButtonClick}
        >
          이메일 주소를 인증합니다
        </CheckAuthButton>
        {isEmailAuthButtonClicked && (
          <>
            <Message>입력하신 이메일로 인증번호가 전송되었습니다</Message>
            <Span>
              <BodyTopsDots />
            </Span>

            <BodyForm paddingTop={38} paddingBottom={8}>
              <CustomText>인증번호를 입력해주세요</CustomText>
              <CustomInput type="text" name="emailAuth" required />
            </BodyForm>
            <CheckAuthButton>인증하기</CheckAuthButton>
          </>
        )}
        <SubmitButton>시작하기</SubmitButton>
      </Body>
    </Container>
  );
};

export default EmailAuth;
