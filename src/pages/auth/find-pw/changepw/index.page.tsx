import * as Auth from "~/components/Auth/Auth";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  Body,
  BodyForm,
  BodyTopText,
  CheckAuthButton,
  Container,
  Message
} from "~/components/Auth/Auth.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import { useChangePw } from "./changePw.hook";

const ChangePw: NextPageWithLayout = () => {
  const {
    password,
    confirmPassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleChangePwButtonClick,
    errorMessage,
    successMessage
  } = useChangePw();

  return (
    <Container>
      <Auth.Header text="비밀번호 찾기" />
      <Body>
        <BodyForm paddingTop={38} paddingBottom={8}>
          <BodyTopText>인증이 완료되었습니다</BodyTopText>
          <BodyTopText marginBottom={40}>비밀번호를 입력해주세요</BodyTopText>
          <CustomText>새 비밀번호 입력</CustomText>
          <CustomInput
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <CustomText>새 비밀번호 확인</CustomText>
          <CustomInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <Auth.WarningMessage>{errorMessage}</Auth.WarningMessage>
          <Message>{successMessage}</Message>
        </BodyForm>
        <CheckAuthButton marginTop={45} onClick={handleChangePwButtonClick}>
          확인
        </CheckAuthButton>
      </Body>
    </Container>
  );
};

export default ChangePw;

ChangePw.layoutConfig = {
  case: "default"
};
