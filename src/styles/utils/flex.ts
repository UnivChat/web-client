import { css } from "@emotion/react";
import type { CSSProperties } from "react";

type FlexProps = Pick<
  CSSProperties,
  "flexDirection" | "justifyContent" | "alignItems"
>;

export const flex = (
  { flexDirection, justifyContent, alignItems }: FlexProps = {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
) => {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
};
