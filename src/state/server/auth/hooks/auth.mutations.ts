import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { AC_TOKEN_KEY, RE_TOKEN_KEY } from "~/constants";
import { signIn } from "../apis";

export const useSignIn = () => {
  return useMutation(signIn, {
    onSuccess: ({ jwtDto }) => {
      setCookie(AC_TOKEN_KEY, jwtDto.accessToken);
      setCookie(RE_TOKEN_KEY, jwtDto.refreshToken);
    }
  });
};
