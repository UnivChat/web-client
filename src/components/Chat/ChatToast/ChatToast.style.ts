import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import type { ButtonProps } from "../ChatToastCommon.style";

export const Button = styled.button<ButtonProps>`
  width: ${pxToRem(190)};
  height: ${pxToRem(21)};
  color: ${props => props.color || "#fff"};
  background-color: ${props => props.backgroundColor || "#002f92"};
  border-radius: ${pxToRem(13)};
  margin-bottom: ${props => props.marginBottom || pxToRem(7)};
  border: 0;
`;
