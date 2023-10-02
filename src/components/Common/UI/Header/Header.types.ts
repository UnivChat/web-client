import type { ReactNode } from "react";

export interface HeaderProps {
  title: string;
  subTitle?: string;
  bgColor?: string;
  element?: { left?: ReactNode; right?: ReactNode };
  bgColor?: string;
}
