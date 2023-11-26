import { useMutation } from "@tanstack/react-query";
import { classExit } from "../api";

export const useClassExit = () => {
  return useMutation(classExit);
};
