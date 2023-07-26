import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { AC_TOKEN_KEY, RE_TOKEN_KEY } from "~/constants";
import { signIn, signOut, verifyEmail } from "../apis";
import {
  setEmailErrorMessage,
  setIsEmailAuthButtonClicked,
  setEmailAuthButtonBgColor,
  setServerAuthCode
} from "../../../client/Auth/emailAuth/emailAuthSlice";

export const useSignIn = () => {
  const { replace } = useRouter();

  return useMutation(signIn, {
    onSuccess: ({ jwtDto }) => {
      setCookie(AC_TOKEN_KEY, jwtDto.accessToken);
      setCookie(RE_TOKEN_KEY, jwtDto.refreshToken);

      replace("/");
    }
  });
};

export const useSignOut = () => {
  const { push } = useRouter();

  return useMutation(signOut, {
    onSuccess: () => {
      deleteCookie(AC_TOKEN_KEY);
      deleteCookie(RE_TOKEN_KEY);
      push("/auth/sign-in");
    }
  });
};

export const useEmailVerification = () => {
  const dispatch = useDispatch();

  return useMutation(verifyEmail, {
    onSuccess: data => {
      if (data.code === "1000") {
        dispatch(setIsEmailAuthButtonClicked(true));
        dispatch(setEmailAuthButtonBgColor("#B3B8C1"));
        dispatch(setServerAuthCode(data.result.checkCode));
      } else {
        dispatch(setEmailErrorMessage("다시 이메일을 인증해주세요."));
      }
    },
    onError: () => {
      dispatch(setEmailErrorMessage("다시 이메일을 인증해주세요."));
    }
  });
};
