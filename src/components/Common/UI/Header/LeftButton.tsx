import React from "react";
import { Svg } from "~/components/Common";
import { useRouter } from "next/router";
import { Button } from "./Header.styles";

interface LeftButtonProps {
  type: string | null;
}

const LeftButton = ({ type }: LeftButtonProps) => {
  const router = useRouter();

  if (type === "back") {
    return (
      <Button
        type="button"
        onClick={() => {
          router.back();
        }}
      >
        <Svg _width={12} _height={24} svgName="back" />
      </Button>
    );
  }
  return null;
};

export default LeftButton;
