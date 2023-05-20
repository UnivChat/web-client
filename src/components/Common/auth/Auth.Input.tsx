import type { PropsWithChildren } from "react";
import * as Styled from "./Auth.styles";
import type { CustomInputProps } from "./Auth.type";

// input
export const CustomInput = ({ ...props }: CustomInputProps) => {
  return <Styled.Input {...props} />;
};

// input title
export const CustomText = ({
  children,
  marginTop
}: PropsWithChildren<{ marginTop?: number }>) => {
  return <Styled.Text marginTop={marginTop}>{children}</Styled.Text>;
};
