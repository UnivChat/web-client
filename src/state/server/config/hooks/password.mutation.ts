import { useMutation } from "@tanstack/react-query";
import { changePasswordApi } from "../api";

export const useChangePasswordMutation = () => {
  return useMutation(changePasswordApi);
};
