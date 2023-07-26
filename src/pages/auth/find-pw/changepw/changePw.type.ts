import type { ChangeEventHandler, MouseEventHandler } from "react";

export type UseChangePwReturnType = {
  password: string;
  confirmPassword: string;
  handlePasswordChange: ChangeEventHandler<HTMLInputElement>;
  handleConfirmPasswordChange: ChangeEventHandler<HTMLInputElement>;
  handleChangePwButtonClick: MouseEventHandler;
  errorMessage: string;
  successMessage: boolean;
};
