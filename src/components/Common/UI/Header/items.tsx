import React from "react";
import { Svg } from "~/components/Common";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Styled from "./items.styles";

export const Back = () => {
  const { back } = useRouter();

  return (
    <Styled.BackButton type="button" onClick={back}>
      <Svg _width={8} _height={16} svgName="back" />
    </Styled.BackButton>
  );
};

export const Plus = () => {
  return (
    <Link href="class/classSearch">
      <Svg _width={15} _height={15} svgName="plus" />
    </Link>
  );
};
