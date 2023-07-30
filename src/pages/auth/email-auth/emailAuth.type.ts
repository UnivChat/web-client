import type { ChangeEventHandler } from "react";

export type UseEmailAuthReturnValue = {
  email: string;
  handleEmailChange: ChangeEventHandler<HTMLInputElement>;
  emailAuth: string;
  handleEmailAuthChange: ChangeEventHandler<HTMLInputElement>;
  emailErrorMessage: string;
  isEmailAuthButtonClicked: boolean;
  emailAuthButtonBgColor: string;
  handleEmailAuthButtonClick: VoidFunction;
  validateAuthCode: () => boolean;
  authErrorMessage: string;
  isVerified: boolean;
  handleStartButtonClick: VoidFunction;
};
