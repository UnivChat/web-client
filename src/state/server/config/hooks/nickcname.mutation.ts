import { useMutation } from "@tanstack/react-query";
import { patchUserInfo } from "../api";

export const useNickNameChangeMutation = () => {
  return useMutation(patchUserInfo);
};
