import type * as svgList from "@svgs";

export interface ContainerProps {
  _width?: number | `${number}%` | `${number}px`;
  _height?: number | `${number}%` | `${number}px`;
  _fill?: Style.ColorKey;
}

export interface SvgProps extends ContainerProps {
  svgName: keyof typeof svgList;
  as?: keyof JSX.IntrinsicElements;
}
