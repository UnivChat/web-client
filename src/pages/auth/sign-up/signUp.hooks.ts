import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import type {
  UseIdCheckReturnValue,
  UseInputReturnValue,
  UseSiginFormReturnValue,
  UseSubmitReturnValue
} from "./SignUp.type";

export const useInput = (initialValue: string): UseInputReturnValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange
  };
};

export const useSiginForm = (): UseSiginFormReturnValue => {
  const name = useInput("");
  const id = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");
  const nickname = useInput("");

  const [gender, setGender] = useState<"male" | "female" | undefined>(
    undefined
  );

  const handleGenderButtonClick = (selectedGender: "male" | "female") => {
    setGender(selectedGender);
  };

  return {
    name,
    id,
    password,
    confirmPassword,
    nickname,
    gender: {
      value: gender,
      handleGenderButtonClick
    },
    handleGenderButtonClick
  };
};

// 성별, 비밀번호 중복 체크 확인 후 다음 페이지로 이동
export const useSubmit = (
  genderValue: "male" | "female" | undefined,
  passwordValue: string,
  confirmPasswordValue: string
): UseSubmitReturnValue => {
  const router = useRouter();
  const [genderWarning, setGenderWarning] = useState(false);
  const [passwordsMatchWarning, setPasswordsMatchWarning] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault();

      if (!genderValue) {
        setGenderWarning(true);
        return;
      }
      setGenderWarning(false);

      if (passwordValue !== confirmPasswordValue) {
        setPasswordsMatchWarning(true);
        return;
      }
      setPasswordsMatchWarning(false);

      router.push("/auth/email-auth");
    },
    [router, genderValue, passwordValue, confirmPasswordValue]
  );

  return {
    handleSubmit,
    genderWarning,
    passwordsMatchWarning
  };
};

// 중복확인
export const useIdCheck = (): UseIdCheckReturnValue => {
  const handleIdCheck: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    e => {
      e.stopPropagation();
      e.preventDefault();
    },
    []
  );

  return {
    handleIdCheck
  };
};

export default useSiginForm;
