import type { CSSProperties } from "react";

export interface FlexProps {
  direction?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
  gap?: number;
  bgColor?: string;
  position?: CSSProperties["position"];
  display?: "flex" | "inline-flex";
  selfAlignRowCenter?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
}
