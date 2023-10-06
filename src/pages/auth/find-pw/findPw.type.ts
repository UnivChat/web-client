export interface UseFindPwReturnValue {
  email: string;
  handleEmailChange: React.ChangeEventHandler<HTMLInputElement>;
  emailAuth: string;
  handleEmailAuthChange: React.ChangeEventHandler<HTMLInputElement>;
  emailErrorMessage: string;
  authErrorMessage: string;
  isFindPwButtonClicked: boolean;
  findPwButtonBgColor: string;
  handleFindPwButtonClick: () => void;
  validateAuthCode: () => boolean;
  handleStartButtonClick: () => void;
  isVerified: boolean;
  isLoading: boolean;
}

export interface AxiosResponseData {
  code: string;
  result: {
    checkCode: number;
  };
}
