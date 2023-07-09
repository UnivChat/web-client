import type { ChangeEvent, MouseEventHandler } from "react";

export type UseChangePwReturnType = {
  password: string;
  confirmPassword: string;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleConfirmPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangePwButtonClick: MouseEventHandler;
  errorMessage: string;
  successMessage: string;
};
