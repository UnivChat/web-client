import { useMutation } from "@tanstack/react-query";
import { signIn } from "@server-state/auth/apis";
import { deleteAccApi } from "../api";

export const useDeleteAcc = () => {
  const deleteAccMutation = useMutation(deleteAccApi);

  return useMutation(signIn, {
    onSuccess: () => {
      deleteAccMutation.mutate(undefined);
    }
  });
};
