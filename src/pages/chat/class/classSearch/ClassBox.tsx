import React from "react";
import { Svg } from "~/components/Common";
import * as Styled from "./classbox.styles";
import type { ClassBoxProps } from "./classbox.types";

export const ClassBox = ({
  svgName,
  title,
  classTime,
  classNumber,
  subTitle
}: ClassBoxProps) => {
  return (
    <Styled.ClassBox>
      <div>
        <Styled.Title>
          [{classNumber}] {title}
        </Styled.Title>
        <Styled.SubTitle>
          {classTime} {subTitle}
        </Styled.SubTitle>
      </div>
      <button type="button" className="icon">
        <Svg _width={18} _height={18} svgName={svgName} />
      </button>
    </Styled.ClassBox>
  );
};
