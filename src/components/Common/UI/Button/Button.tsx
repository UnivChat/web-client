import type { PropsWithChildren } from "react";
import * as Styled from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  ...containerProps
}: PropsWithChildren<ButtonProps>) => {
  return <Styled.Container {...containerProps}>{children}</Styled.Container>;
};
