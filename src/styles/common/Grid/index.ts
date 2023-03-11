import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { GridProps } from "./Grid.types";

export const grid = (props: GridProps = {}) => {
  const {
    columnCount,
    gap,
    columnGap,
    rowGap,
    position,
    fullWidth,
    autoColumnSize
  } = props;

  return css`
    ${position && `position: ${position}};`}
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: ${`repeat(${columnCount},${
      autoColumnSize ? "auto" : "1fr"
    } )`};

    ${gap !== undefined && `gap: ${gap}px;`}
    ${columnGap !== undefined && `column-gap: ${columnGap}px;`}
    ${rowGap !== undefined && `row-gap: ${rowGap}px;`}
    
    ${fullWidth && "width: 100%;"}
  `;
};

export const Grid = styled.div<GridProps>`
  ${props => grid(props)}
`;
