import * as Auth from "~/components/Auth/Auth";
import { BodyTopsDots } from "~/components/Auth/Auth.BodyTop";
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
import { useFindPw } from "./findPw.hooks";

const FindPw: NextPageWithLayout = () => {
  const { isFindPwButtonClicked, findPwButtonBgColor, handlfindPwButtonClick } =
    useFindPw();

  return (
    <Container>
      <Auth.Header text="비밀번호 찾기" />
      <Body>
        <BodyForm paddingTop={70} paddingBottom={8}>
          <CustomText>학교 이메일을 입력해주세요</CustomText>
          <CustomInput type="email" name="email" required />
        </BodyForm>
        <CheckAuthButton
          style={{ backgroundColor: findPwButtonBgColor }}
          onClick={handlfindPwButtonClick}
        >
          확인
        </CheckAuthButton>
        {isFindPwButtonClicked && (
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
      </Body>
    </Container>
  );
};

export default FindPw;

FindPw.layoutConfig = {
  case: "default"
};
