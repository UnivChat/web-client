import * as Auth from "~/components/Auth/Auth";
import { BodyTopsDots } from "~/components/Auth/Auth.BodyTop";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  AcceptMessage,
  Body,
  BodyForm,
  CheckAuthButton,
  Container,
  LoadingWrap,
  Span
} from "~/components/Auth/Auth.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import { Spinner } from "~/pages/home/facilities/Facilities.style";
import { useFindPw } from "./findPw.hooks";

const FindPw: NextPageWithLayout = () => {
  const hook = useFindPw();

  return (
    <Container>
      <Auth.Header text="비밀번호 찾기" />
      <Body>
        <BodyForm paddingTop={70} paddingBottom={8}>
          <CustomText>학교 이메일을 입력해주세요</CustomText>
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
          style={{ backgroundColor: hook.findPwButtonBgColor }}
          onClick={hook.handleFindPwButtonClick}
        >
          확인
        </CheckAuthButton>
        {hook.isLoading && (
          <LoadingWrap>
            <Spinner />
          </LoadingWrap>
        )}
        {hook.isFindPwButtonClicked && (
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
      </Body>
    </Container>
  );
};

export default FindPw;

FindPw.layoutConfig = {
  case: "default"
};
