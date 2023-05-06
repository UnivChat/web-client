import type { SvgProps } from "~/components/Common/UI/Svg/Svg.types";

// AmenityItem.tsx
export interface AmenityItemProps {
  svgName: SvgProps["svgName"];
  label: string;
  href?: string;
}
