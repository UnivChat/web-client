import type { ButtonHTMLAttributes } from "react";

export interface ButtonContainerProps {
  $width: string;
  $height: string;
}

export interface ButtonProps
  extends ButtonContainerProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}
