import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import type { ButtonProps } from "../ChatToastCommon.style";

export const Button = styled.button<ButtonProps>`
  width: ${pxToRem(190)};
  height: ${pxToRem(21)};
  color: ${({ color }) => color || "#fff"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#002f92"};
  border-radius: ${pxToRem(13)};
  margin-bottom: ${({ marginBottom }) => marginBottom || pxToRem(7)};
  border: 0;
`;
