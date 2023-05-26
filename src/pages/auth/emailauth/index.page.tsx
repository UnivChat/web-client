import * as Auth from "~/components/Common/Auth/Auth";
import {
  Body,
  BodyForm,
  CheckAuthButton,
  Container,
  Message,
  Span
} from "~/components/Common/Auth/Auth.styles";
import { BodyTop, BodyTopsDots } from "~/components/Common/Auth/Auth.BodyTop";
import { CustomInput, CustomText } from "~/components/Common/Auth/Auth.Input";
import { useEmailAuth } from "./emailAuth.hooks";

const EmailAuth = () => {
  const {
    isEmailAuthButtonClicked,
    emailAuthButtonBgColor,
    handleEmailAuthButtonClick
  } = useEmailAuth();

  return (
    <Container>
      <Auth.Header text="회원가입" />
      <Body>
        <BodyTop currentStep={2} />

        <BodyForm paddingTop={38} paddingBottom={8}>
          <CustomText>이메일을 입력해주세요</CustomText>
          <CustomInput type="email" name="email" required />
        </BodyForm>
        <CheckAuthButton
          bgColor={emailAuthButtonBgColor}
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
              <CustomInput name="emailAuth" required />
            </BodyForm>
            <CheckAuthButton>인증하기</CheckAuthButton>
          </>
        )}
        <Auth.SubmitButton>시작하기</Auth.SubmitButton>
      </Body>
    </Container>
  );
};

export default EmailAuth;
