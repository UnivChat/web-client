import React from "react";
import { Svg } from "~/components/Common";
import type * as svgList from "@svgs";
import * as Styled from "./classbox.styles";

interface Props {
  title: string;
  subTitle: string;
  svgName: keyof typeof svgList;
}

export const ClassBox = ({ svgName, title, subTitle }: Props) => {
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
