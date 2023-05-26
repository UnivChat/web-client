import React from "react";
import { Svg } from "~/components/Common";
import { useRouter } from "next/router";
import * as Styled from "./BackButton.styles";

export const BackButton = () => {
  const { back } = useRouter();

  return (
    <Styled.Button type="button" onClick={back}>
      <Svg _width={8} _height={16} svgName="back" />
    </Styled.Button>
  );
};
