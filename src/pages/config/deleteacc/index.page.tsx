import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  BodyForm,
  CheckAuthButton,
  Container
} from "~/components/Auth/Auth.styles";
import { Header } from "~/components/Common/UI/Header/Header";
import * as CommonStyled from "../config.styles";
import type { NextPageWithLayout } from "../../app.types";

const DeleteAcc: NextPageWithLayout = () => {
  return (
    <Container>
      <Header.Back title="회원탈퇴" bgColor="white" />
      <CommonStyled.ConfigBody>
        <BodyForm paddingTop={70} paddingBottom={8}>
          <CustomText>계정 비밀번호</CustomText>
          <CustomInput name="password" required />
        </BodyForm>
        <CheckAuthButton>확인</CheckAuthButton>
      </CommonStyled.ConfigBody>
    </Container>
  );
};

export default DeleteAcc;

DeleteAcc.layoutConfig = {
  case: "tab"
};
