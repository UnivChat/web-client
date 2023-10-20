import styled from "@emotion/styled";
import Link from "next/link";
import { Svg } from "~/components/Common";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";

// Component styles
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${pxToRem(163)};
  min-height: 100vh;
  background-color: #f8f9fb;
  color: ${colors.white};
`;

export const LogoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Svg)`
  margin: ${pxToRem(203)} ${pxToRem(10)} ${pxToRem(55)} 0;
  width: ${pxToRem(136)};
  height: ${pxToRem(136)};
`;

export const AppName = styled.span`
  font-weight: 800;
  font-size: ${pxToRem(40)};
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(20)};
  width: ${pxToRem(240)};
  margin-top: ${pxToRem(38)};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: ${pxToRem(62)};
  width: 100%;
`;

export const IdPwIcon = styled(Svg)`
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  fill: ${colors.background};
  position: absolute;
  left: ${pxToRem(14.2)};
`;

export const Input = styled.input`
  width: 100%;
  height: ${pxToRem(42)};
  font-size: ${pxToRem(14)};
  padding-left: ${pxToRem(14.2 * 2 + 8)};
  background-color: ${colors.white};

  color: ${colors.background};
  border: 1px solid #e6e6e6;
  border-radius: ${pxToRem(15)};

  ::placeholder {
    color: ${colors.background};
  }

  &:focus {
    border-color: ${colors.blue13}; // 포커스 시 InputWrapper 테두리 색상 변경
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: ${pxToRem(45)};
  margin-top: ${pxToRem(20)};
  box-shadow: inset 0px -7px 13px #00000029, 0px 6px 10px #00000029;
  background-color: #003091;
  border-radius: ${pxToRem(15)};
  font-weight: 600;
  font-size: ${pxToRem(16)};
`;

export const SubArea = styled.div`
  display: flex;
  justify-content: center;
  gap: ${pxToRem(21)};
  width: ${pxToRem(210)};
  font-weight: 300;
  margin-top: ${pxToRem(26)};
  color: ${colors.background};
`;

export const SubText = styled(Link)`
  position: relative;
  font-size: ${pxToRem(13)};
  & + &::before {
    content: "|";
    position: absolute;
    top: 50%;
    left: -${pxToRem(21 / 2)};
    transform: translate(-100%, -50%);
  }
`;

export const ErrorMessage = styled.div`
  color: ${colors.warning};
  font-size: ${pxToRem(13)};
`;
