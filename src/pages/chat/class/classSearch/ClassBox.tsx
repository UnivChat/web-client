import React from "react";
import { Svg } from "~/components/Common";
import * as Styled from "./classbox.styles";
import type { ClassBoxProps } from "./classbox.types";

export const ClassBox = ({ svgName, title, subTitle }: ClassBoxProps) => {
  return (
    <Styled.ClassBox>
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>{subTitle}</Styled.SubTitle>
      </div>
      <button type="button" className="icon">
        <Svg _width={18} _height={18} svgName={svgName} />
      </button>
    </Styled.ClassBox>
  );
};
