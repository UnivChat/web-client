import React, { useCallback } from "react";
import { useLoginForm } from "./loginPage.hooks";
import * as Styled from "./loginPage.styles";

const Login = () => {
  const { id, password } = useLoginForm();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const handleFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.setAttribute("placeholder", "");
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const placeholderText = inputName === "id" ? "아이디" : "비밀번호";
    e.currentTarget.setAttribute("placeholder", placeholderText);
  }, []);

  return (
    <Styled.Container>
      <Styled.LoginBox>
        <Styled.AppName>CAT CHAT</Styled.AppName>

        <Styled.LoginForm onSubmit={handleSubmit}>
          <Styled.InputWrapper>
            <Styled.IdPwIcon svgName="enter" />
            <Styled.IdBox
              type="text" // email이 아니라 id로 입력 받기
              {...id}
              placeholder="아이디"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="id"
            />
          </Styled.InputWrapper>

          <Styled.InputWrapper>
            <Styled.IdPwIcon svgName="unlock" />
            <Styled.PwBox
              type="password"
              {...password}
              placeholder="비밀번호"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="password"
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
