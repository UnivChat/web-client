import { setEmail as setEmailInRedux } from "@client-state/Auth/find-pw/changepw/emailSlice";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import {
  setEmailAuth,
  setEmailErrorMessage,
  setAuthErrorMessage,
  setIsVerified,
  setIsFindPwButtonClicked,
  setFindPwButtonBgColor
} from "@client-state/Auth/find-pw/findPwSlice";
import { emailRegex } from "~/constants/emailRegex";
import { useVerifyPasswordEmailMutation } from "@server-state/auth";
import type { UseFindPwReturnValue } from "./findPw.type";

export const useFindPw = (): UseFindPwReturnValue => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    emailAuth,
    emailErrorMessage,
    isFindPwButtonClicked,
    findPwButtonBgColor,
    serverAuthCode,
    authErrorMessage,
    isVerified
  } = useAppSelector(state => state.findPw);

  const email = useAppSelector(state => state.email);
  const mutation = useVerifyPasswordEmailMutation();

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setEmailInRedux(e.target.value));
  };

  const handleEmailAuthChange: React.ChangeEventHandler<
    HTMLInputElement
  > = e => {
    dispatch(setEmailAuth(e.target.value));
    dispatch(setAuthErrorMessage(""));
  };

  const handleFindPwButtonClick = () => {
    if (!email || !emailRegex.test(email)) {
      dispatch(setEmailErrorMessage("이메일 형식을 확인해주세요."));
      return;
    }
    dispatch(setEmailErrorMessage(""));
    mutation.mutate(email);
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
      setTimeout(() => {
        router.push("/auth/find-pw/changepw");
      }, 1000);
      setTimeout(() => {
        dispatch(setEmailAuth(""));
        dispatch(setIsFindPwButtonClicked(false));
        dispatch(setFindPwButtonBgColor("#003091"));
        dispatch(setIsVerified(false));
      }, 2000);
    }
    return isCodeValid;
  };

  const handleStartButtonClick = () => {
    if (isVerified) {
      router.push("/auth/find-pw/changepw");
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
    isFindPwButtonClicked,
    findPwButtonBgColor,
    handleFindPwButtonClick,
    validateAuthCode: handleVerifyButtonClick,
    handleStartButtonClick,
    isVerified
  };
};
