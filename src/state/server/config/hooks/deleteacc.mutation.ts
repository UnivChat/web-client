import { useMutation } from "@tanstack/react-query";
import { deleteAccApi } from "../api";

export const useDeleteAccMutation = () => {
  return useMutation(deleteAccApi);
};
