import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";
import { Svg } from "../Common";

export type ButtonProps = {
  color?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  marginBottom?: string;
};

export type TextProps = {
  marginBottom?: string;
};

export type SpacerProps = {
  width?: string;
};

export const Container = styled.div`
  position: relative;
  width: ${pxToRem(290)};
  height: ${pxToRem(203)};
  background-color: #98abd2;
  border-radius: ${pxToRem(16)};
`;

export const IconWrap = styled.div`
  ${flex({ justifyContent: "center" })}
  padding-top: ${pxToRem(21)};
`;

export const Icon = styled(Svg)`
  background-color: #ffffff;
  border-radius: 50%;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  padding: ${pxToRem(6)};
  display: inline-block;
  position: relative;
  z-index: 2;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${pxToRem(28)};
    height: ${pxToRem(28)};
    transform: translate(-50%, -50%);
  }
`;

export const Box = styled.div`
  position: absolute;
  bottom: 0px;
  width: ${pxToRem(290)};
  height: ${pxToRem(163)};
  background: #ffffff;
  border-radius: 0px 0px ${pxToRem(16)} ${pxToRem(16)};
  opacity: 1;
`;

export const BoxContent = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  padding-top: ${pxToRem(26)};
`;

export const Text = styled.div<TextProps>`
  font-size: ${pxToRem(15)};
  font-weight: 600;
  letter-spacing: ${pxToRem(0.5)};
  margin-bottom: ${({ marginBottom = pxToRem(20) }) => marginBottom};
`;
export const TextHilight = styled.span`
  color: #002f92;
`;

export const Spacer = styled.div<SpacerProps>`
  width: ${({ width }) => width};
`;

const CommonButtonStyle = styled.button<ButtonProps>`
  width: ${({ width = pxToRem(190) }) => width};
  height: ${({ height = pxToRem(30) }) => height};

  color: ${({ color = "#fff" }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor || "#002f92"};
  border-radius: ${pxToRem(13)};
  border: 0;
`;

export const ExitButton = styled(CommonButtonStyle)`
  width: ${pxToRem(75)};
  height: ${pxToRem(35)};
`;

export const Button = styled(CommonButtonStyle)`
  margin-bottom: ${({ marginBottom = pxToRem(7) }) => marginBottom};
`;

export const ExitContainer = styled.div`
  position: relative;
  width: ${pxToRem(290)};
  height: ${pxToRem(173)};
  background-color: #98abd2;
  border-radius: ${pxToRem(16)};
`;

export const ExitBox = styled.div`
  position: absolute;
  bottom: 0px;
  width: ${pxToRem(290)};
  height: ${pxToRem(133)};
  background: #ffffff;
  border-radius: 0px 0px ${pxToRem(16)} ${pxToRem(16)};
  opacity: 1;
`;
