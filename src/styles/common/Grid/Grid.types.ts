import type { CSSProperties } from "react";

export interface GridProps {
  columnCount?: number;
  gap?: number;
  columnGap?: number;
  rowGap?: number;
  position?: CSSProperties["position"];
  fullWidth?: boolean;
  autoColumnSize?: boolean;
}
