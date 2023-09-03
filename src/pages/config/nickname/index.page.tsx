import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  BodyForm,
  CheckAuthButton,
  Container
} from "~/components/Auth/Auth.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import { Header } from "~/components/Common/UI/Header/Header";
import * as CommonStyled from "../config.styles";

const NickName: NextPageWithLayout = () => {
  return (
    <Container>
      <Header.Back title="닉네임 변경" bgColor="white" />
      <CommonStyled.ConfigBody>
        <BodyForm paddingTop={70} paddingBottom={8}>
          <CustomText>닉네임 변경하기</CustomText>
          <CustomInput name="nickname" required />
        </BodyForm>
        <CheckAuthButton>확인</CheckAuthButton>
      </CommonStyled.ConfigBody>
    </Container>
  );
};

export default NickName;

NickName.layoutConfig = {
  case: "default"
};
