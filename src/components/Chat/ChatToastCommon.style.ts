import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import { flex } from "~/styles/utils/flex";
import { Svg } from "../Common";

export type ButtonProps = {
  color?: string;
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
  width: ${pxToRem(220)};
  height: ${pxToRem(143)};
  background-color: #98abd2;
  border-radius: ${pxToRem(16)};
`;

export const IconWrap = styled.div`
  ${flex({ justifyContent: "center" })}
  padding-top: ${pxToRem(10)};
`;

export const Icon = styled(Svg)`
  background-color: #ffffff;
  border-radius: 50%;
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
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
  width: ${pxToRem(220)};
  height: ${pxToRem(113)};
  background: #ffffff;
  border-radius: 0px 0px ${pxToRem(16)} ${pxToRem(16)};
  opacity: 1;
`;

export const BoxContent = styled.div`
  ${flex({ flexDirection: "column", alignItems: "center" })}
  padding-top: ${pxToRem(28)};
`;

export const Text = styled.div<TextProps>`
  font-size: ${pxToRem(12)};
  font-weight: 600;
  letter-spacing: ${pxToRem(0.5)};
  margin-bottom: ${({ marginBottom }) => marginBottom || pxToRem(12)};
`;
export const TextHilight = styled.span`
  color: #002f92;
`;

export const Spacer = styled.div<SpacerProps>`
  width: ${({ width }) => width || pxToRem(0)};
`;
