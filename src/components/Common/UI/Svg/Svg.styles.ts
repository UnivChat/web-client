import styled from "@emotion/styled";
import { colors } from "~/constants";
import { pxToRem } from "~/utils";
import type { ContainerProps } from "./Svg.types";

export const Container = styled.div<
  Readonly<ContainerProps & { isInlineElement: boolean }>
>`
  position: relative;

  ${({ isInlineElement }) => isInlineElement && "display:block;"}

  width: ${({ _width = 30 }) =>
    typeof _width === "number" ? pxToRem(_width) : _width};
  height: ${({ _height = 30 }) =>
    typeof _height === "number" ? pxToRem(_height) : _height};

  ${({ _fill }) => _fill && `color: ${colors[_fill]}`};

  & > svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;
