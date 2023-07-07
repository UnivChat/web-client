import type { ChangeEvent } from "react";

export type UseEmailAuthReturnValue = {
  email: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  emailAuth: string;
  handleEmailAuthChange: (e: ChangeEvent<HTMLInputElement>) => void;
  emailErrorMessage: string;
  isEmailAuthButtonClicked: boolean;
  emailAuthButtonBgColor: string;
  handleEmailAuthButtonClick: () => void;
  validateAuthCode: () => boolean;
  authErrorMessage: string;
  isVerified: boolean;
  handleStartButtonClick: () => void;
};
