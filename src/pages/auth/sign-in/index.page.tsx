import { useSignIn } from "@server-state/auth";
import React, { useCallback } from "react";
import type { NextPageWithLayout } from "~/pages/app.types";
import { useAppSelector } from "@client-state/hooks";
import { useLoginForm } from "./SignIn.hooks";
import * as Styled from "./SignIn.styles";

const SignIn: NextPageWithLayout = () => {
  const { message } = useAppSelector(state => state.signin);
  const { id, password } = useLoginForm();
  const { mutate: callSignInAPI } = useSignIn();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      callSignInAPI({
        email: id.value,
        password: password.value
      });
    },
    [callSignInAPI, id, password]
  );

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
      <Styled.LogoBox>
        <Styled.Logo _width="135px" _height="135px" svgName="logo" />
      </Styled.LogoBox>

      <Styled.LoginForm onSubmit={handleSubmit}>
        <Styled.InputWrapper>
          <Styled.IdPwIcon svgName="enter" />
          <Styled.Input
            {...id}
            placeholder="아이디"
            onFocus={handleFocus}
            onBlur={handleBlur}
            name="id"
          />
        </Styled.InputWrapper>

        <Styled.InputWrapper>
          <Styled.IdPwIcon svgName="unlock" />
          <Styled.Input
            type="password"
            {...password}
            placeholder="비밀번호"
            onFocus={handleFocus}
            onBlur={handleBlur}
            name="password"
          />
        </Styled.InputWrapper>
        {message ? (
          <Styled.ErrorMessage>
            아이디 또는 비밀번호를 잘못 입력했습니다.
          </Styled.ErrorMessage>
        ) : null}

        <Styled.LoginButton>로그인</Styled.LoginButton>
      </Styled.LoginForm>

      <Styled.SubArea>
        <Styled.SubText href="/auth/find-pw">비밀번호 찾기</Styled.SubText>
        <Styled.SubText href="/auth/sign-up">회원가입</Styled.SubText>
      </Styled.SubArea>
    </Styled.Container>
  );
};

export default SignIn;

SignIn.layoutConfig = {
  case: "default"
};
