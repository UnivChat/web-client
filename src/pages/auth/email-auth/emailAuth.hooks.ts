import axios from "axios";
import { useState } from "react";
import type { ChangeEvent } from "react";
import type { UseEmailAuthReturnValue } from "./emailAuth.type";

export const useEmailAuth = (): UseEmailAuthReturnValue => {
  const [email, setEmail] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [isEmailAuthButtonClicked, setIsEmailAuthButtonClicked] =
    useState<boolean>(false);
  const [emailAuthButtonBgColor, setEmailAuthButtonBgColor] =
    useState<string>("#003091");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailAuthButtonClick = async () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailErrorMessage("이메일 형식을 입력해주세요.");
      return;
    }
    setEmailErrorMessage("");
    try {
      const response = await axios.post("/api/member/check/email", { email });
      if (response.data.code === "1000") {
        setIsEmailAuthButtonClicked(true);
        setEmailAuthButtonBgColor("#B3B8C1");
      } else {
        setEmailErrorMessage("다시 이메일을 인증해주세요.");
      }
    } catch (error) {
      setEmailErrorMessage("다시 이메일을 인증해주세요.");
    }
  };

  return {
    email,
    handleEmailChange,
    emailErrorMessage,
    isEmailAuthButtonClicked,
    emailAuthButtonBgColor,
    handleEmailAuthButtonClick
  };
};
