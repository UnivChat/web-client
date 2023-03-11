import { breakpoints } from "~/constants";
import { getMediaQuery } from "./getMediaQuery";
import { stripPx } from "./stripPx";

export const media = {
  tablet: getMediaQuery(stripPx(breakpoints.tablet)),
  desktop: getMediaQuery(stripPx(breakpoints.desktop)),
  desktopOnly: getMediaQuery(stripPx(breakpoints.desktop) + 1, "min")
};
