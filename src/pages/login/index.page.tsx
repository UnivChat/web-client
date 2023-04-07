import React, { useCallback } from "react";
import { Svg } from "~/components/Common";
import * as Styled from "./loginPage.styles";
import { useLoginForm } from './loginPage.hooks';

const Login = () => {
  const { email, password } = useLoginForm();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  }, []);

  return (
    <Styled.Container>
      <Styled.LoginBox>
        <Styled.AppName>CAT CHAT</Styled.AppName>

        <Styled.LoginForm onSubmit={handleSubmit}>
          <Styled.InputWrapper>
            <Svg
              svgName="enter"
              _width="2vh"
              _height="2vh"
              _fill="background"
            />
            <Styled.IdBox
              type="email"
              {...email}
              placeholder="아이디"
            />
          </Styled.InputWrapper>

          <Styled.InputWrapper>
            <Svg
              svgName="unlock"
              _width="2vh"
              _height="2vh"
              _fill="background"
            />
            <Styled.PwBox
              type="password"
              {...password}
              placeholder="비밀번호"
            />
          </Styled.InputWrapper>

          <Styled.LoginButton>입장하기</Styled.LoginButton>
        </Styled.LoginForm>

        <Styled.SubArea>
          <Styled.FindPw href="">비밀번호 찾기</Styled.FindPw>
          <Styled.SubText>|</Styled.SubText>
          <Styled.SignIn href="">회원가입</Styled.SignIn>
        </Styled.SubArea>
      </Styled.LoginBox>
    </Styled.Container>
  );
};

export default Login;
