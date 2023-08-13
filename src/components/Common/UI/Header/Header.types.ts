import type { ReactNode } from "react";

export interface HeaderProps {
  title: string;
  subTitle?: string;
  element?: { left?: ReactNode; right?: ReactNode };
}
