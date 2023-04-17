import styled from "@emotion/styled";
import Link from "next/link";
import { Svg } from "~/components/Common";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  padding-bottom: ${pxToRem(163)};
  min-height: 100vh;

  background-color: ${colors.background};
  color: ${colors.white};
`;

export const AppName = styled.span`
  font-weight: 800;
  font-size: ${pxToRem(40)};
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};

  width: ${pxToRem(210)};
  margin-top: ${pxToRem(38)};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  border-radius: ${pxToRem(62)};
`;

export const IdPwIcon = styled(Svg)`
  fill: ${colors.background};
  position: absolute;
  left: ${pxToRem(14.2)};
`;
IdPwIcon.defaultProps = {
  _width: 12,
  _height: 13
};

export const Input = styled.input`
  width: 100%;
  height: ${pxToRem(35)};
  padding-left: ${pxToRem(14.2 * 2 + 6)};

  background-color: ${colors.white};

  color: ${colors.background};
  border: 1px solid transparent;
  box-shadow: inset 0px -7px 13px #00000029, 0px 3px 10px #00000029;
  border-radius: ${pxToRem(62)};

  ::placeholder {
    color: ${colors.background};
  }

  &:focus {
    border-color: ${colors.blue13}; // 포커스 시 InputWrapper 테두리 색상 변경
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: ${pxToRem(35)};
  margin-top: ${pxToRem(20)};

  box-shadow: inset 0px -7px 13px #00000029, 0px 6px 10px #00000029;
  background-color: ${colors.blue13};
  border-radius: ${pxToRem(62)};

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
`;

export const SubText = styled(Link)`
  position: relative;
  font-size: 1.5vh;

  & + &::before {
    content: "|";
    position: absolute;
    top: 50%;
    left: -${pxToRem(21 / 2)};
    transform: translate(-100%, -50%);
  }
`;
