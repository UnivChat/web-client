import React from "react";
import { Svg } from "~/components/Common";
import { useRouter } from "next/router";
import * as Styled from "./BackButton.styles";

export const BackButton = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Styled.Button type="button" onClick={handleBackClick}>
      <Svg _width={8} _height={16} svgName="back" />
    </Styled.Button>
  );
};
