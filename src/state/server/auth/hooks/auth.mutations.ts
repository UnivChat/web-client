import { useMutation } from "@tanstack/react-query";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { AC_TOKEN_KEY, RE_TOKEN_KEY } from "~/constants";
import { signIn, signOut } from "../apis";

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
