import { useMutation } from "@tanstack/react-query";
import { classEnter, classExit } from "../api";

export const useClassExit = () => {
  return useMutation(classExit);
};

export const useClassEnter = () => {
  return useMutation(classEnter);
};
