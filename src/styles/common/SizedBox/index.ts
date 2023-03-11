import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import type { SizedBoxProps } from "./SizedBox.types";

export const SizedBox = styled.div<SizedBoxProps>`
  ${({ _width }) => _width && `width: ${pxToRem(_width)};`}
  ${({ _height }) => _height && `height: ${pxToRem(_height)};`}
  
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
`;
