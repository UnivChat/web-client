import styled from "@emotion/styled";
import type { ButtonContainerProps } from "./Button.types";

export const Container = styled.button<ButtonContainerProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
