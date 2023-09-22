import type { InputHTMLAttributes } from "react";

export interface CustomInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  required: boolean;
  width?: string;
}

export interface StyleProps {
  marginTop?: number;
  marginBottom?: number;
  paddingTop?: number;
  paddingBottom?: number;
  width?: string;
  opacity?: number;
  bgColor?: string;
  fontSize?: string;
}
