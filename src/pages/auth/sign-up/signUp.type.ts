import type { ChangeEvent, FormEventHandler, MouseEventHandler } from "react";

// useInput 타입 정의
export interface UseInputReturnValue {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// useSiginForm 타입 정의
export interface UseSiginFormReturnValue {
  name: UseInputReturnValue;
  id: UseInputReturnValue;
  password: UseInputReturnValue;
  confirmPassword: UseInputReturnValue;
  nickname: UseInputReturnValue;
  gender: {
    value: "male" | "female" | undefined;
    handleGenderButtonClick: (selectedGender: "male" | "female") => void;
  };
  handleGenderButtonClick: (selectedGender: "male" | "female") => void;
}

// useSubmit 타입 정의
export interface UseSubmitReturnValue {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  genderWarning: boolean;
  passwordsMatchWarning: boolean;
  signupError: string;
  message: string;
}

// useIdCheck 타입 정의
export interface UseIdCheckReturnValue {
  handleIdCheck: MouseEventHandler<HTMLButtonElement>;
  message: string;
  isDuplicate: boolean;
}
