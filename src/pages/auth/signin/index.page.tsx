import * as CommonComponents from "~/components/Common/auth/auth";
import {
  Body,
  BodyForm,
  Container
} from "~/components/Common/auth/auth.styles";
import * as Styled from "./signinPage.styles";
import { useIdCheck, useSiginForm, useSubmit } from "./signinPage.hooks";
import { pxToRem } from "../../../utils/styles/sizeChanger";

const {
  Header,
  BodyTop,
  CustomInput,
  CustomText,
  WarningMessage,
  SubmitButton
} = CommonComponents;

const SignInPage = () => {
  const {
    name,
    id,
    password,
    confirmPassword,
    nickname,
    gender,
    handleGenderButtonClick
  } = useSiginForm();
  const { handleSubmit, genderWarning, passwordsMatchWarning } = useSubmit(
    gender.value,
    password.value,
    confirmPassword.value
  );
  const { handleIdCheck } = useIdCheck();

  return (
    <Container>
      <Header text="회원가입" />
      <Body>
        <BodyTop step={1} />

        <BodyForm onSubmit={handleSubmit} paddingTop={22}>
          <CustomText>이름</CustomText>
          <CustomInput type="text" name="name" required {...name} />
          <CustomText>아이디</CustomText>
          <CustomInput
            type="text"
            name="id"
            required
            width={pxToRem(204)}
            {...id}
          />
          <Styled.CheckIdButton onClick={handleIdCheck}>
            중복확인
          </Styled.CheckIdButton>
          <CustomText>비밀번호</CustomText>
          <CustomInput type="password" name="password" required {...password} />
          <CustomText>비밀번호 확인</CustomText>
          <CustomInput
            type="password"
            name="confirmPassword"
            required
            {...confirmPassword}
          />
          {passwordsMatchWarning && (
            <WarningMessage>비밀번호가 일치하지 않습니다</WarningMessage>
          )}
          <CustomText>닉네임</CustomText>
          <CustomInput type="text" name="nickname" required {...nickname} />
          <CustomText marginTop={pxToRem(23)}>성별</CustomText>
          <Styled.GenderButton
            type="button"
            isSelected={gender.value === "male"}
            onClick={() => handleGenderButtonClick("male")}
          >
            남 성
          </Styled.GenderButton>
          <Styled.GenderButton
            type="button"
            isSelected={gender.value === "female"}
            onClick={() => handleGenderButtonClick("female")}
          >
            여 성
          </Styled.GenderButton>
          {genderWarning && (
            <WarningMessage>성별을 선택해 주세요.</WarningMessage>
          )}
          <SubmitButton>다음</SubmitButton>
        </BodyForm>
      </Body>
    </Container>
  );
};

export default SignInPage;
