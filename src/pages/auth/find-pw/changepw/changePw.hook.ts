import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import { useChangePasswordMutation } from "@server-state/auth";
import type { ChangeEventHandler } from "react";
import {
  setPassword,
  setConfirmPassword,
  setErrorMessage,
  setSuccessMessage
} from "@client-state/Auth/find-pw/changepw/changePwSlice";
import type { UseChangePwReturnType } from "./changePw.type";

export const useChangePw = (): UseChangePwReturnType => {
  const email = useAppSelector(({ email }) => email);
  const { password, confirmPassword, errorMessage, successMessage } =
    useAppSelector(state => state.changePw);

  const dispatch = useAppDispatch();

  const changePasswordMutation = useChangePasswordMutation(email, password);

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setPassword(e.target.value));
  };

  const handleConfirmPasswordChange: ChangeEventHandler<
    HTMLInputElement
  > = e => {
    dispatch(setConfirmPassword(e.target.value));
  };

  const handleChangePwButtonClick = () => {
    if (!password || !confirmPassword) {
      dispatch(setErrorMessage("비밀번호를 입력해주세요."));
      return;
    }

    if (password !== confirmPassword) {
      dispatch(setErrorMessage("비밀번호가 일치하지 않습니다."));
      return;
    }

    if (password === confirmPassword) {
      dispatch(setSuccessMessage(true));
    }

    changePasswordMutation.mutate();
  };

  return {
    password,
    confirmPassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleChangePwButtonClick,
    errorMessage,
    successMessage
  };
};
