import React from "react";
import { useRouter } from "next/router";
import { Svg } from "~/components/Common";

interface Props {
  rightButton?: string;
}

export const RightButton = ({ rightButton }: Props) => {
  const { push } = useRouter();

  if (rightButton === "plus") {
    return (
      <button type="button" onClick={() => push("/class/classSearch")}>
        <Svg _width={15} _height={15} svgName="plus" />
      </button>
    );
  }
  return null;
};
