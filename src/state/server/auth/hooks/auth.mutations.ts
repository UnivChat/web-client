import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "@client-state/hooks";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { AC_TOKEN_KEY, RE_TOKEN_KEY } from "~/constants";
import * as EmailAuthSlice from "@client-state/Auth/emailAuth/emailAuthSlice";
import * as FindPwSlice from "@client-state/Auth/find-pw/findPwSlice";
import * as changePwSlice from "@client-state/Auth/find-pw/changepw/changePwSlice";
import * as signupSlice from "@client-state/Auth/signUp/signUpSlice";
import { clearEmail } from "@client-state/Auth/find-pw/changepw/emailSlice";
import * as api from "../apis";

export const useSignIn = () => {
  const { replace } = useRouter();

  return useMutation(api.signIn, {
    onSuccess: ({ jwtDto }) => {
      setCookie(AC_TOKEN_KEY, jwtDto.accessToken);
      setCookie(RE_TOKEN_KEY, jwtDto.refreshToken);

      replace("/");
    }
  });
};

export const useSignOut = () => {
  const { push } = useRouter();

  return useMutation(api.signOut, {
    onSuccess: () => {
      deleteCookie(AC_TOKEN_KEY);
      deleteCookie(RE_TOKEN_KEY);
      push("/auth/sign-in");
    }
  });
};

// 이메일 인증 mutation
export const useEmailVerification = () => {
  const dispatch = useAppDispatch();

  return useMutation(api.verifyEmail, {
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
  const dispatch = useAppDispatch();

  return useMutation(api.verifyPasswordEmail, {
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
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation(() => api.changePasswordApi(email, password), {
    onSuccess: () => {
      setTimeout(() => {
        dispatch(clearEmail());
        dispatch(changePwSlice.clearChangePw());
        router.push("/auth/sign-in");
      }, 1000);
    },
    onError: () => {
      dispatch(changePwSlice.setErrorMessage("비밀번호 변경에 실패했습니다."));
      dispatch(changePwSlice.setSuccessMessage(false));
    }
  });
};

// 회원가입 mutation
export const useSubmitMutation = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation(api.signUpApi, {
    onSuccess: response => {
      if (response.data.code === "1000") {
        router.push("/auth/email-auth");
      } else {
        dispatch(signupSlice.setSignupError(response.data.message));
      }
    },
    onError: () => {
      dispatch(signupSlice.setSignupError("에러가 발생했습니다."));
    }
  });
};

// 회원가입 id중복확인 mutation
export const useIdCheckMutation = () => {
  const dispatch = useAppDispatch();

  return useMutation((email: string) => api.idCheckApi(email), {
    onSuccess: response => {
      if (response.data.result === "사용 가능한 이메일입니다.") {
        dispatch(signupSlice.setMessage("사용 가능한 이메일입니다."));
        dispatch(signupSlice.setMessageType("success"));
        dispatch(signupSlice.setIsDuplicate(false));
      } else {
        dispatch(signupSlice.setMessage(response.data.result));
        dispatch(signupSlice.setMessageType("error"));
        dispatch(signupSlice.setIsDuplicate(true));
      }
    },
    onError: () => {
      dispatch(signupSlice.setMessage("에러가 발생했습니다."));
      dispatch(signupSlice.setMessageType("error"));
    }
  });
};
