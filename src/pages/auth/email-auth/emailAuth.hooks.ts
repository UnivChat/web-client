import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEmailVerification } from "@server-state/auth";
import type { ChangeEvent } from "react";
import type { RootState } from "@client-state/index";
import {
  setEmail,
  setEmailAuth,
  setEmailErrorMessage,
  setAuthErrorMessage,
  setIsVerified
} from "@client-state/Auth/emailAuth/emailAuthSlice";
import type { UseEmailAuthReturnValue } from "./emailAuth.type";

export const useEmailAuth = (): UseEmailAuthReturnValue => {
  const dispatch = useDispatch();
  const {
    email,
    emailAuth,
    emailErrorMessage,
    isEmailAuthButtonClicked,
    emailAuthButtonBgColor,
    serverAuthCode,
    authErrorMessage,
    isVerified
  } = useSelector((state: RootState) => state.emailAuth);

  const verifyEmailMutation = useEmailVerification();
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handleEmailAuthChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailAuth(e.target.value));
    dispatch(setAuthErrorMessage(""));
  };

  const handleEmailAuthButtonClick = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      dispatch(setEmailErrorMessage("이메일 형식을 입력해주세요."));
      return;
    }
    dispatch(setEmailErrorMessage(""));
    verifyEmailMutation.mutate(email);
  };

  const handleVerifyButtonClick = (): boolean => {
    if (!emailAuth) {
      dispatch(setAuthErrorMessage("인증번호를 입력해주세요."));
      dispatch(setIsVerified(false));
      return false;
    }

    const isCodeValid = String(serverAuthCode) === emailAuth;
    if (!isCodeValid) {
      dispatch(setAuthErrorMessage("인증번호가 틀립니다."));
      dispatch(setIsVerified(false));
    } else {
      dispatch(setAuthErrorMessage(""));
      dispatch(setIsVerified(true));
    }
    return isCodeValid;
  };

  const handleStartButtonClick = () => {
    if (isVerified) {
      router.push("/auth/sign-in");
    } else {
      dispatch(setAuthErrorMessage("인증번호를 입력해주세요."));
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
