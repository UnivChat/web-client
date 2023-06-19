import * as Auth from "~/components/Auth/Auth";
import { BodyTop, BodyTopsDots } from "~/components/Auth/Auth.BodyTop";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  Body,
  BodyForm,
  CheckAuthButton,
  Container,
  Message,
  Span
} from "~/components/Auth/Auth.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import { useEmailAuth } from "./emailAuth.hooks";

const EmailAuth: NextPageWithLayout = () => {
  const {
    email,
    handleEmailChange,
    emailErrorMessage,
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
          <CustomInput
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          {emailErrorMessage && (
            <Auth.WarningMessage>{emailErrorMessage}</Auth.WarningMessage>
          )}
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

EmailAuth.layoutConfig = {
  case: "default"
};
