import React, { useState } from "react";
import { Svg } from "~/components/Common";
import {
  AppName,
  Container,
  FindPw,
  IdBox,
  InputWrapper,
  LoginBox,
  LoginButton,
  LoginForm,
  PwBox,
  SignIn,
  SubArea,
  SubText
} from "./loginPage.styles";
import type { LoginFormType } from "./loginPage.type";

const Login = () => {
  const [loginFormData, setloginFormData] = useState<LoginFormType>({
    email: "",
    password: ""
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: keyof LoginFormType
  ) => {
    setloginFormData(prevState => ({
      ...prevState,
      [inputName]: event.target.value
    }));
  };

  return (
    <Container>
      <LoginBox>
        <AppName>CAT CHAT</AppName>

        <LoginForm onSubmit={e => e.preventDefault()}>
          <InputWrapper>
            <Svg
              svgName="enter"
              _width="2vh"
              _height="2vh"
              _fill="background"
            />
            <IdBox
              type="email"
              value={loginFormData.email}
              onChange={e => handleInputChange(e, "email")}
              placeholder="아이디"
            />
          </InputWrapper>

          <InputWrapper>
            <Svg
              svgName="unlock"
              _width="2vh"
              _height="2vh"
              _fill="background"
            />
            <PwBox
              type="password"
              value={loginFormData.password}
              onChange={e => handleInputChange(e, "password")}
              placeholder="비밀번호"
            />
          </InputWrapper>

          <LoginButton type="button">입장하기</LoginButton>
        </LoginForm>

        <SubArea>
          <FindPw href="">비밀번호 찾기</FindPw>
          <SubText>|</SubText>
          <SignIn href="">회원가입</SignIn>
        </SubArea>
      </LoginBox>
    </Container>
  );
};

export default Login;
