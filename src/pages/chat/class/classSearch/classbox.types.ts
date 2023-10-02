import type * as svgList from "@svgs";

export interface ClassBoxProps {
  title?: string;
  subTitle?: string;
  className?: string;
  classNumber?: string;
  classTime?: string;
  svgName: keyof typeof svgList;
}
