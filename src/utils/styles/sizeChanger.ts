import { criteria, ROOT_FONT_SIZE } from "~/constants";

const calculator = (width: number, criteria: number) => {
  const percentage = (width / criteria) * 100;

  return `${percentage}vw`;
};

export const vw = (width: number) => calculator(width, criteria.DESKTOP.width);

export const vwMobile = (width: number) =>
  calculator(width, criteria.MOBILE.width);

export const pxToRem = (px: number): string => `${px / ROOT_FONT_SIZE}rem`;
