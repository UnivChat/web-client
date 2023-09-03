import {
  BodyForm,
  BodyTopText,
  CheckAuthButton,
  Container
} from "~/components/Auth/Auth.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import { Header } from "~/components/Common/UI/Header/Header";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import { pxToRem } from "~/utils";
import { BodyTopsDots } from "~/components/Auth/Auth.BodyTop";
import { Blank } from "./password.style";
import * as CommonStyled from "../config.styles";

const Password: NextPageWithLayout = () => {
  return (
    <Container>
      <Header.Back title="비밀번호 변경" bgColor="white" />
      <CommonStyled.ConfigBody>
        <BodyForm paddingTop={38} paddingBottom={8}>
          <BodyTopText>비밀번호를 변경해주세요</BodyTopText>
          <BodyTopText marginBottom={40} fontSize={pxToRem(13)}>
            영문,숫자,특문이 2종류 이상 조합된8~20자
          </BodyTopText>
          <CustomText>현재 비밀번호</CustomText>
          <CustomInput type="password" name="currentPassword" required />
          <Blank>
            <BodyTopsDots />
          </Blank>
          <CustomText>새 비밀번호 입력</CustomText>
          <CustomInput type="password" name="password" required />
          <CustomText>새 비밀번호 확인</CustomText>
          <CustomInput type="password" name="confirmPassword" required />
        </BodyForm>
        <CheckAuthButton marginTop={45}>확인</CheckAuthButton>
      </CommonStyled.ConfigBody>
    </Container>
  );
};

export default Password;

Password.layoutConfig = {
  case: "tab"
};
