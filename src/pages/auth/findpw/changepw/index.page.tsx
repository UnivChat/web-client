import * as CommonComponents from "~/components/Common/auth/auth";
import {
  Body,
  BodyForm,
  BodyTopText,
  CheckAuthButton,
  Container
} from "~/components/Common/auth/auth.styles";

const { Header, CustomInput, CustomText } = CommonComponents;

const ChangePw = () => {
  return (
    <Container>
      <Header text="비밀번호 찾기" />
      <Body>
        <BodyForm paddingTop={38} paddingBottom={8}>
          <BodyTopText>인증이 완료되었습니다</BodyTopText>
          <BodyTopText marginBottom={40}>비밀번호를 입력해주세요</BodyTopText>
          <CustomText>새 비밀번호 입력</CustomText>
          <CustomInput type="password" name="password" required />
          <CustomText>새 비밀번호 확인</CustomText>
          <CustomInput type="password" name="confirmPassword" required />
        </BodyForm>
        <CheckAuthButton marginTop={45}>확인</CheckAuthButton>
      </Body>
    </Container>
  );
};

export default ChangePw;
