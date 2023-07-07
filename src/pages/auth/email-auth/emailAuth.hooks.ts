import { createAxiosInstance } from "@server-state/axios";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import type { ChangeEvent } from "react";
import type { UseEmailAuthReturnValue } from "./emailAuth.type";

export const useEmailAuth = (): UseEmailAuthReturnValue => {
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isEmailAuthButtonClicked, setIsEmailAuthButtonClicked] =
    useState(false);
  const [emailAuthButtonBgColor, setEmailAuthButtonBgColor] =
    useState("#003091");
  const axiosInstance = createAxiosInstance({ needAuth: true });

  const mutation = useMutation(
    email =>
      axiosInstance
        .post("/member/email/verified", { email })
        .then(response => response.data),
    {
      onSuccess: data => {
        if (data.code === "1000") {
          setIsEmailAuthButtonClicked(true);
          setEmailAuthButtonBgColor("#B3B8C1");
        } else {
          setEmailErrorMessage("다시 이메일을 인증해주세요.");
        }
      },
      onError: () => {
        setEmailErrorMessage("다시 이메일을 인증해주세요.");
      }
    }
  );

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailAuthButtonClick = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailErrorMessage("이메일 형식을 입력해주세요.");
      return;
    }
    setEmailErrorMessage("");

    mutation.mutate(email);
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
