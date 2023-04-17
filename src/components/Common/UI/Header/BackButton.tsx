import React from "react";
import { Svg } from "~/components/Common";
import { useRouter } from "next/router";
import * as Styled from "./Header.styles";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Styled.Button
      type="button"
      onClick={() => {
        router.back();
      }}
    >
      <Svg _width={8} _height={16} svgName="back" />
    </Styled.Button>
  );
};
