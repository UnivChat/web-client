export interface UseEmailAuthReturnValue {
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailErrorMessage: string;
  isEmailAuthButtonClicked: boolean;
  emailAuthButtonBgColor: string;
  handleEmailAuthButtonClick: () => Promise<void>;
}
