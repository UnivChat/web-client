import { useState } from "react";
import { createAxiosInstance } from "@server-state/axios";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponseData, UseFindPwReturnValue } from "./findPw.type";

export const useFindPw = (): UseFindPwReturnValue => {
  const [email, setEmail] = useState("");
  const [emailAuth, setEmailAuth] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isFindPwButtonClicked, setIsFindPwButtonClicked] = useState(false);
  const [findPwButtonBgColor, setFindPwButtonBgColor] = useState("#003091");
  const [serverAuthCode, setServerAuthCode] = useState<number | null>(null);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const axiosInstance = createAxiosInstance({ needAuth: true });
  const router = useRouter();

  const mutation = useMutation<AxiosResponseData, Error, string, unknown>(
    email =>
      axiosInstance
        .post<AxiosResponseData>("/member/email/verified", { email })
        .then(response => response.data),
    {
      onSuccess: data => {
        if (data.code === "1000") {
          setIsFindPwButtonClicked(true);
          setFindPwButtonBgColor("#B3B8C1");
          setServerAuthCode(data.result.checkCode);
        } else {
          setEmailErrorMessage("다시 이메일을 확인해주세요.");
        }
      },
      onError: () => {
        setEmailErrorMessage("다시 이메일을 확인해주세요.");
      }
    }
  );

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEmail(e.target.value);
  };

  const handleEmailAuthChange: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    setEmailAuth(e.target.value);
    setAuthErrorMessage("");
  };

  const handleFindPwButtonClick = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailErrorMessage("이메일 형식을 확인해주세요.");
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
      router.push("/auth/find-pw/changepw");
    }
    return isCodeValid;
  };

  const handleStartButtonClick = () => {
    if (isVerified) {
      router.push("/auth/find-pw/changepw");
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
    isFindPwButtonClicked,
    findPwButtonBgColor,
    handleFindPwButtonClick,
    validateAuthCode: handleVerifyButtonClick,
    handleStartButtonClick,
    isVerified
  };
};
