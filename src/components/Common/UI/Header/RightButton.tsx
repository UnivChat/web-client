import React from "react";
import { Svg } from "~/components/Common";
import Link from "next/link";

interface Props {
  rightButton?: string;
}

export const RightButton = ({ rightButton }: Props) => {
  if (rightButton === "plus") {
    return (
      <Link href="class/classSearch">
        <Svg _width={15} _height={15} svgName="plus" />
      </Link>
    );
  }
  return null;
};
