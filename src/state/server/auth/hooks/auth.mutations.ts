import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { AC_TOKEN_KEY, RE_TOKEN_KEY } from "~/constants";
import * as EmailAuthSlice from "@client-state/Auth/emailAuth/emailAuthSlice";
import * as FindPwSlice from "@client-state/Auth/find-pw/findPwSlice";
import * as changePwSlice from "@client-state/Auth/find-pw/changepw/changePwSlice";
import { clearEmail } from "@client-state/Auth/find-pw/changepw/emailSlice";
import {
  changePasswordApi,
  signIn,
  signOut,
  verifyEmail,
  verifyPasswordEmail
} from "../apis";

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

// 이메일 인증 mutation
export const useEmailVerification = () => {
  const dispatch = useDispatch();

  return useMutation(verifyEmail, {
    onSuccess: data => {
      if (data.code === "1000") {
        dispatch(EmailAuthSlice.setIsEmailAuthButtonClicked(true));
        dispatch(EmailAuthSlice.setEmailAuthButtonBgColor("#B3B8C1"));
        dispatch(EmailAuthSlice.setServerAuthCode(data.result.checkCode));
      } else {
        dispatch(
          EmailAuthSlice.setEmailErrorMessage("다시 이메일을 인증해주세요.")
        );
      }
    },
    onError: () => {
      dispatch(
        EmailAuthSlice.setEmailErrorMessage("다시 이메일을 인증해주세요.")
      );
    }
  });
};

// 비밀번호 찾기 mutation
export const useVerifyPasswordEmailMutation = () => {
  const dispatch = useDispatch();

  return useMutation(verifyPasswordEmail, {
    onSuccess: data => {
      if (data.code === "1000") {
        dispatch(FindPwSlice.setIsFindPwButtonClicked(true));
        dispatch(FindPwSlice.setFindPwButtonBgColor("#B3B8C1"));
        dispatch(FindPwSlice.setServerAuthCode(data.result.checkCode));
      } else {
        dispatch(
          FindPwSlice.setEmailErrorMessage("다시 이메일을 확인해주세요.")
        );
      }
    },
    onError: () => {
      dispatch(FindPwSlice.setEmailErrorMessage("다시 이메일을 확인해주세요."));
    }
  });
};

// 비밀번호 변경 mutation
export const useChangePasswordMutation = (email: string, password: string) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return useMutation(() => changePasswordApi(email, password), {
    onSuccess: () => {
      dispatch(changePwSlice.setSuccessMessage(true));
      dispatch(clearEmail());
      dispatch(changePwSlice.clearChangePw());
      router.push("/auth/sign-in");
    },
    onError: () => {
      dispatch(changePwSlice.setErrorMessage("비밀번호 변경에 실패했습니다."));
      dispatch(changePwSlice.setSuccessMessage(false));
    }
  });
};
