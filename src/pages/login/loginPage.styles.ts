import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Svg } from "~/components/Common";
import type {
  IdPwBoxProps,
  LoginFormProps,
  SubAreaProps
} from "./loginPage.type";

// Color
export const colors = {
  background: "#003091",
  primary: "#f8f9fb",
  secondary: "#1360fc",
  text: "white"
};

// Font
export const sharedTextStyles = css`
  font-family: "NanumGothic", sans-serif;
  color: ${colors.text};
`;

// Component styles
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const LoginBox = styled.div`
  padding-top: 42vh;
  display: flex;
  flex-direction: column;
`;

export const AppName = styled.div`
  ${sharedTextStyles};
  font-weight: 600;
  font-size: 4.5vh;
  text-align: center;
`;

export const LoginForm = styled.form<LoginFormProps>`
  margin-top: 4.5vh;
  text-align: center;
`;

export const InputWrapper = styled.div`
  width: 66vw;
  height: 5vh;
  border-radius: 62px;
  box-shadow: inset 0px -7px 13px #00000029, 0px 3px 10px #00000029;
  background-color: ${colors.primary};
  margin-top: 2.3vh;
  display: flex;
  align-items: center;
  padding-left: 4vw;
  border: 1px solid transparent; // 테두리 추가
`;

export const IdPwIcon = styled(Svg)`
  width: 2vh;
  fill: ${colors.background};

  ${({ svgName }) => {
    if (svgName === "enter") {
      return css`
        height: 1.8vh;
      `;
    }

    if (svgName === "unlock") {
      return css`
        height: 2vh;
      `;
    }

    return css`
      width: 2vh;
    `;
  }}
`;

export const IdBox = styled.input<IdPwBoxProps>`
  ${sharedTextStyles};
  font-weight: 400;
  font-size: 1.5vh;
  padding-left: 2vw;
  width: 80%;
  background-color: transparent;
  color: ${colors.background};

  ::placeholder {
    color: ${colors.background};
  }

  &:focus {
    outline: none; // 기존 테두리 제거
    ~ ${InputWrapper} {
      border-color: ${colors.primary}; // 포커스 시 InputWrapper 테두리 색상 변경
    }
  }
`;

export const PwBox = styled(IdBox)<IdPwBoxProps>``;

export const LoginButton = styled.button`
  ${sharedTextStyles};
  font-weight: 600;
  margin-top: 6.7vh;
  width: 66vw;
  height: 5vh;
  box-shadow: inset 0px -7px 13px #00000029, 0px 6px 10px #00000029;
  background-color: ${colors.secondary};
  border-radius: 62px;
  font-size: 2.2vh;
`;

export const SubArea = styled.div`
  ${sharedTextStyles};
  font-weight: 300;
  text-align: center;
  margin-top: 7vh;
`;

export const FindPw = styled(Link)<SubAreaProps>`
  ${sharedTextStyles};
  font-size: 1.5vh;
`;

export const SubText = styled.span`
  margin: 0 6vw;
  ${sharedTextStyles};
  font-size: 1.5vh;
`;

export const SignIn = styled(FindPw)<SubAreaProps>`
  ${sharedTextStyles};
  font-size: 1.5vh;
`;
