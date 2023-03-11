/* eslint-disable import/namespace */
import * as svgList from "@svgs";
import { useMemo } from "react";
import * as Styled from "./Svg.styles";
import type { SvgProps } from "./Svg.types";

export const Svg = ({ svgName, as, ...containerProps }: SvgProps) => {
  const isInlineElement = useMemo(() => {
    if (as) {
      return ["span", "a"].includes(as);
    }
    return false;
  }, [as]);

  const SvgComponent = svgList[svgName];

  return (
    <Styled.Container
      {...containerProps}
      as={as}
      isInlineElement={isInlineElement}
    >
      <SvgComponent />
    </Styled.Container>
  );
};
