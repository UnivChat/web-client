import * as Auth from "~/components/Auth/Auth";
import { BodyTop, BodyTopsDots } from "~/components/Auth/Auth.BodyTop";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  Body,
  BodyForm,
  CheckAuthButton,
  Container,
  AcceptMessage,
  Span,
  LoadingWrap
} from "~/components/Auth/Auth.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import { useEmailAuth } from "./emailAuth.hooks";
import { Spinner } from "~/pages/home/facilities/Facilities.style";

const EmailAuth: NextPageWithLayout = () => {
  const hook = useEmailAuth();

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
            value={hook.email}
            onChange={hook.handleEmailChange}
          />
          {hook.emailErrorMessage && (
            <Auth.WarningMessage>{hook.emailErrorMessage}</Auth.WarningMessage>
          )}
        </BodyForm>
        <CheckAuthButton
          bgColor={hook.emailAuthButtonBgColor}
          onClick={hook.handleEmailAuthButtonClick}
        >
          이메일 주소를 인증합니다
        </CheckAuthButton>
        {hook.isLoading && (
          <LoadingWrap>
            <Spinner />
          </LoadingWrap>
        )}
        {hook.isEmailAuthButtonClicked && (
          <>
            <AcceptMessage>
              입력하신 이메일로 인증번호가 전송되었습니다
            </AcceptMessage>
            <Span>
              <BodyTopsDots />
            </Span>

            <BodyForm paddingTop={38} paddingBottom={8}>
              <CustomText>인증번호를 입력해주세요</CustomText>
              <CustomInput
                type="text"
                name="emailAuth"
                required
                value={hook.emailAuth}
                onChange={hook.handleEmailAuthChange}
              />
              {hook.authErrorMessage && (
                <Auth.WarningMessage>
                  {hook.authErrorMessage}
                </Auth.WarningMessage>
              )}
              {hook.isVerified && (
                <AcceptMessage>인증되었습니다.</AcceptMessage>
              )}
            </BodyForm>
            <CheckAuthButton onClick={hook.validateAuthCode}>
              인증하기
            </CheckAuthButton>
          </>
        )}

        <Auth.SubmitButton onClick={hook.handleStartButtonClick}>
          시작하기
        </Auth.SubmitButton>
      </Body>
    </Container>
  );
};

export default EmailAuth;

EmailAuth.layoutConfig = {
  case: "default"
};
