import type * as svgList from "@svgs";

export interface ClassBoxProps {
  title: string;
  subTitle: string;
  svgName: keyof typeof svgList;
}
