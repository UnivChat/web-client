import type { SvgProps } from "~/components/Common/UI/Svg/Svg.types";

type BottomTabItem = {
  key: string;
  svgName: SvgProps["svgName"];
  path: `/${string}`;
  activeSvgName: SvgProps["svgName"];
};

export const bottomTabList = [
  {
    svgName: "home",
    key: "home",
    path: "/home",
    activeSvgName: "homeActive"
  },
  {
    svgName: "chat",
    key: "chat",
    path: "/chat",
    activeSvgName: "chatActive"
  },
  {
    svgName: "cog",
    key: "config",
    path: "/config",
    activeSvgName: "cogActive"
  }
] satisfies BottomTabItem[];
