export interface UseEmailAuthReturnValue {
  email: string;
  handleEmailChange: React.ChangeEventHandler<HTMLInputElement>;
  emailErrorMessage: string;
  isEmailAuthButtonClicked: boolean;
  emailAuthButtonBgColor: string;
  handleEmailAuthButtonClick: () => void;
}
