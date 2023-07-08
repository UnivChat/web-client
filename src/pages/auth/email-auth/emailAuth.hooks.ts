import { useState } from "react";
import { createAxiosInstance } from "@server-state/axios";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import type { ChangeEvent } from "react";
import type { UseEmailAuthReturnValue } from "./emailAuth.type";

export const useEmailAuth = (): UseEmailAuthReturnValue => {
  const [email, setEmail] = useState("");
  const [emailAuth, setEmailAuth] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isEmailAuthButtonClicked, setIsEmailAuthButtonClicked] =
    useState(false);
  const [emailAuthButtonBgColor, setEmailAuthButtonBgColor] =
    useState("#003091");
  const [serverAuthCode, setServerAuthCode] = useState<number | null>(null);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const axiosInstance = createAxiosInstance({ needAuth: true });
  const router = useRouter();

  const mutation = useMutation(
    (email: string) =>
      axiosInstance
        .post("/member/email/verified", { email })
        .then(response => response.data),
    {
      onSuccess: data => {
        if (data.code === "1000") {
          setIsEmailAuthButtonClicked(true);
          setEmailAuthButtonBgColor("#B3B8C1");
          setServerAuthCode(data.result.checkCode);
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

  const handleEmailAuthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailAuth(e.target.value);
    setAuthErrorMessage("");
  };

  const handleEmailAuthButtonClick = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailErrorMessage("이메일 형식을 입력해주세요.");
      return;
    }
    setEmailErrorMessage("");
    mutation.mutate(email);
  };

  const handleVerifyButtonClick = (): boolean => {
    if (!emailAuth) {
      setAuthErrorMessage("인증번호를 입력해주세요.");
      setIsVerified(false);
      return false;
    }

    const isCodeValid = String(serverAuthCode) === emailAuth;
    if (!isCodeValid) {
      setAuthErrorMessage("인증번호가 틀립니다.");
      setIsVerified(false);
    } else {
      setAuthErrorMessage("");
      setIsVerified(true);
    }
    return isCodeValid;
  };

  const handleStartButtonClick = () => {
    if (isVerified) {
      router.push("/auth/sign-in");
    } else {
      setAuthErrorMessage("인증번호를 입력해주세요.");
    }
  };

  return {
    email,
    handleEmailChange,
    emailAuth,
    handleEmailAuthChange,
    emailErrorMessage,
    authErrorMessage,
    isEmailAuthButtonClicked,
    emailAuthButtonBgColor,
    handleEmailAuthButtonClick,
    validateAuthCode: handleVerifyButtonClick,
    handleStartButtonClick,
    isVerified
  };
};
