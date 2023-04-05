import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import type {
  IdPwBoxProps,
  LoginButtonProps,
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
  /* font-family:  적용 예정 */
  color: ${colors.text};
  font-size: 4.2vh;
  text-align: center;
`;

export const LoginForm = styled.form<LoginFormProps>`
  margin-top: 5.5vh;
  text-align: center;
`;

export const InputWrapper = styled.div`
  width: 66vw;
  height: 5vh;
  border-radius: 62px;
  background-color: ${colors.primary};
  margin-top: 2.3vh;
  display: flex;
  align-items: center;
  padding-left: 4vw;
`;

export const InputImage = styled(Image)`
  width: 2vh;
  height: 2vh;
`;

export const IdBox = styled.input<IdPwBoxProps>`
  /* font-family:  적용 예정 */
  font-size: 1.4vh;
  padding-left: 2vw;
  width: 80%;
  background-color: ${colors.primary};
  ::placeholder {
    color: ${colors.background};
  }
`;

export const PwBox = styled(IdBox)<IdPwBoxProps>`
`;

export const LoginButton = styled.button<LoginButtonProps>`
/* font-family:  적용 예정 */
  margin-top: 6.7vh;
  width: 66vw;
  height: 5vh;
  background-color: ${colors.secondary};
  border-radius: 62px;
  color: ${colors.text};
  font-size: 2.2vh;
`;

export const SubArea = styled.div`
  /* font-family:  적용 예정 */
  text-align: center;
  margin-top: 7vh;
`;

export const FindPw = styled(Link)<SubAreaProps>`
  color: ${colors.text};
  font-size: 1.5vh;
`;

export const SubText = styled.span`
  margin: 0 6vw;
  color: ${colors.text};
  font-size: 1.5vh;
`;

export const SignIn = styled(FindPw)<SubAreaProps>`
  color: ${colors.text};
  font-size: 1.5vh;
`;
