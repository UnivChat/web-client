import { useState } from "react";
import type { UseEmailAuthReturnValue } from "./emailAuth.type";

export const useEmailAuth = (): UseEmailAuthReturnValue => {
  const [isEmailAuthButtonClicked, setIsEmailAuthButtonClicked] = useState(false);
  const [emailAuthButtonBgColor, setEmailAuthButtonBgColor] = useState("#003091");

  const handleEmailAuthButtonClick = () => {
    setIsEmailAuthButtonClicked(true);
    setEmailAuthButtonBgColor("#B3B8C1");
  };

  return {
    isEmailAuthButtonClicked,
    emailAuthButtonBgColor,
    handleEmailAuthButtonClick,
  };
};
