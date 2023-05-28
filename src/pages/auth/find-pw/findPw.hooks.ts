import { useState } from "react";
import type { UseFindPwReturnValue } from "./findPw.type";

export const useFindPw = (): UseFindPwReturnValue => {
  const [isFindPwButtonClicked, setIsFindPwButtonClicked] = useState(false);
  const [findPwButtonBgColor, setFindPwButtonBgColor] = useState("#003091");

  const handlfindPwButtonClick = () => {
    setIsFindPwButtonClicked(true);
    setFindPwButtonBgColor("#B3B8C1");
  };

  return {
    isFindPwButtonClicked,
    findPwButtonBgColor,
    handlfindPwButtonClick
  };
};
