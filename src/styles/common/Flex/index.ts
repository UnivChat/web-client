import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { pxToRem } from "~/utils";
import type { FlexProps } from "./Flex.types";

const flex = (props: FlexProps = {}) => {
  const {
    position,
    display,
    direction,
    alignItems,
    justifyContent,
    gap,
    selfAlignRowCenter,
    fullWidth,
    fullHeight,
    bgColor
  } = props;
  return css`
    position: ${position ?? "static"};
    display: ${display ?? "flex"};
    flex-direction: ${direction ?? "row"};
    align-items: ${alignItems ?? "stretch"};
    justify-content: ${justifyContent ?? "flex-start"};

    ${gap !== undefined && `gap: ${pxToRem(gap)};`}
    ${selfAlignRowCenter && "margin: 0 auto;"}
    ${fullWidth && "width: 100%;"}
    ${fullHeight && "height: 100%;"}
    ${bgColor && `background-color: ${bgColor};`}
  `;
};

const center = (
  props: Omit<FlexProps, "alignItems" | "justifyContent"> = {}
) => css`
  ${flex({ alignItems: "center", justifyContent: "center", ...props })}
`;

const column = (props: Omit<FlexProps, "direction"> = {}) => css`
  ${flex({ direction: "column", ...props })}
`;

flex.center = center;
flex.column = column;
export { flex };

// ======================= Components =======================

export const Flex = styled.div<FlexProps>`
  ${props => flex(props)}
`;

export const FlexCenter = styled.div<
  Omit<FlexProps, "alignItems" | "justifyContent">
>`
  ${props => flex.center(props)}
`;

export const FlexColumn = styled.div<Omit<FlexProps, "direction">>`
  ${props => flex.column(props)}
`;
