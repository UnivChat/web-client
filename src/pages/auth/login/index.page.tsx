import type { FormEventHandler } from "react";
import { useCallback } from "react";
import { useLoginForm } from "./loginPage.hooks";
import * as Styled from "./loginPage.styles";

const Login = () => {
  const { id, password } = useLoginForm();

  const handleSubmit: FormEventHandler = useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <Styled.Container>
      <Styled.AppName>CAT CHAT</Styled.AppName>

      <Styled.LoginForm onSubmit={handleSubmit}>
        <Styled.InputWrapper>
          <Styled.IdPwIcon svgName="enter" />
          <Styled.Input
            type="text" // email이 아니라 id로 입력 받기
            {...id}
            placeholder="아이디"
            name="id"
          />
        </Styled.InputWrapper>

        <Styled.InputWrapper>
          <Styled.IdPwIcon svgName="unlock" />
          <Styled.Input
            type="password"
            {...password}
            placeholder="비밀번호"
            name="password"
          />
        </Styled.InputWrapper>

        <Styled.LoginButton>입장하기</Styled.LoginButton>
      </Styled.LoginForm>

      <Styled.SubArea>
        <Styled.SubText href="">비밀번호 찾기</Styled.SubText>
        <Styled.SubText href="">회원가입</Styled.SubText>
      </Styled.SubArea>
    </Styled.Container>
  );
};

export default Login;
