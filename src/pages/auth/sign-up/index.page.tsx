import * as Auth from "~/components/Auth/Auth";
import { BodyTop } from "~/components/Auth/Auth.BodyTop";
import { CustomInput, CustomText } from "~/components/Auth/Auth.Input";
import {
  AcceptMessage,
  Body,
  BodyForm,
  Container
} from "~/components/Auth/Auth.styles";
import type { NextPageWithLayout } from "~/pages/app.types";
import { pxToRem } from "~/utils/styles/sizeChanger";
import { useIdCheck, useSiginForm, useSubmit } from "./signUp.hooks";
import * as Styled from "./signUp.styles";

const SignInPage: NextPageWithLayout = () => {
  const {
    name,
    id,
    password,
    confirmPassword,
    nickname,
    gender,
    handleGenderButtonClick
  } = useSiginForm();

  const idCheck = useIdCheck(id.value);
  const { handleIdCheck, message, messageType } = idCheck;

  const { handleSubmit, genderWarning, passwordsMatchWarning } = useSubmit(
    gender.value,
    password.value,
    confirmPassword.value,
    id.value,
    nickname.value,
    idCheck
  );

  return (
    <Container>
      <Auth.Header text="회원가입" />
      <Body>
        <BodyTop currentStep={1} />

        <BodyForm onSubmit={handleSubmit} paddingTop={22}>
          <CustomText>이름</CustomText>
          <CustomInput type="text" name="name" required {...name} />
          <CustomText>이메일</CustomText>
          <CustomInput
            type="email"
            name="id"
            required
            width={pxToRem(204)}
            {...id}
          />
          <Styled.CheckIdButton onClick={handleIdCheck}>
            중복확인
          </Styled.CheckIdButton>
          {message &&
            (messageType === "error" ? (
              <Auth.WarningMessage>{message}</Auth.WarningMessage>
            ) : (
              <AcceptMessage>{message}</AcceptMessage>
            ))}
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
            <Auth.WarningMessage>
              비밀번호가 일치하지 않습니다
            </Auth.WarningMessage>
          )}
          <CustomText>닉네임</CustomText>
          <CustomInput type="text" name="nickname" required {...nickname} />
          <CustomText marginTop={23}>성별</CustomText>
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
            <Auth.WarningMessage>성별을 선택해 주세요.</Auth.WarningMessage>
          )}
          <Auth.SubmitButton>다음</Auth.SubmitButton>
        </BodyForm>
      </Body>
    </Container>
  );
};

export default SignInPage;

SignInPage.layoutConfig = {
  case: "default"
};
