import { useMutation } from "@tanstack/react-query";
import { classEnter } from "../api";

export const useClassEnter = () => {
  return useMutation(classEnter);
};
