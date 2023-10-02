import { useMutation } from "@tanstack/react-query";
import { checkNicknameDuplicate } from "../api";
import { useAppDispatch } from "@client-state/hooks";
import * as api from "../api";
import * as signupSlice from "@client-state/Auth/signUp/signUpSlice";

export const useCheckNicknameDuplicate = () => {
  const dispatch = useAppDispatch();

  return useMutation(
    (nickname: string) => api.checkNicknameDuplicate(nickname),
    {
      onSuccess: response => {
        if (response.data.result === "사용 가능한 닉네임입니다.") {
          dispatch(signupSlice.setNickNameMessage("사용 가능한 닉네임입니다."));
          dispatch(signupSlice.setNickNameMessageType("success"));
          dispatch(signupSlice.setNickNameIsDuplicate(false));
        } else {
          dispatch(signupSlice.setNickNameMessage(response.data.result));
          dispatch(signupSlice.setNickNameMessageType("error"));
          dispatch(signupSlice.setNickNameIsDuplicate(true));
        }
      },
      onError: () => {
        dispatch(signupSlice.setNickNameMessage("에러가 발생했습니다."));
        dispatch(signupSlice.setNickNameMessageType("error"));
      }
    }
  );
};
