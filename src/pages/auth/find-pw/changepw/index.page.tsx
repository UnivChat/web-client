import * as Auth from "~/components/Auth/Auth";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import { useAppSelector } from "@client-state/hooks";
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
  const hook = useChangePw();

  const { successMessage } = useAppSelector(state => state.changePw);

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
            value={hook.password}
            onChange={hook.handlePasswordChange}
            required
          />
          <CustomText>새 비밀번호 확인</CustomText>
          <CustomInput
            type="password"
            name="confirmPassword"
            value={hook.confirmPassword}
            onChange={hook.handleConfirmPasswordChange}
            required
          />
          {successMessage ? (
            <Message>비밀번호가 변경되었습니다. 다시 로그인 해주세요.</Message>
          ) : (
            <Auth.WarningMessage>{hook.errorMessage}</Auth.WarningMessage>
          )}
        </BodyForm>
        <CheckAuthButton
          marginTop={45}
          onClick={hook.handleChangePwButtonClick}
        >
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
