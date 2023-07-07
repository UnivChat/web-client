import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { createAxiosInstance } from "@server-state/axios";
import { useMutation } from "@tanstack/react-query";
import type {
  UseIdCheckReturnValue,
  UseInputReturnValue,
  UseSiginFormReturnValue,
  UseSubmitReturnValue
} from "./signUp.type";

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

const axiosInstance = createAxiosInstance({ needAuth: true });

// 성별, 비밀번호 중복 체크 확인 후 다음 페이지로 이동
export const useSubmit = (
  genderValue: "male" | "female" | undefined,
  passwordValue: string,
  confirmPasswordValue: string,
  idValue: string,
  nicknameValue: string
): UseSubmitReturnValue => {
  const router = useRouter();
  const [genderWarning, setGenderWarning] = useState(false);
  const [passwordsMatchWarning, setPasswordsMatchWarning] = useState(false);
  const [signupError, setSignupError] = useState("");

  const mutation = useMutation(
    () =>
      axiosInstance.post("/member/signup", {
        email: idValue,
        gender: genderValue,
        nickname: nicknameValue,
        password: passwordValue
      }),
    {
      onSuccess: response => {
        if (response.data.code === "1000") {
          router.push("/auth/email-auth");
        } else {
          setSignupError(response.data.message);
        }
      },
      onError: () => {
        setSignupError("에러가 발생했습니다.");
      }
    }
  );

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

      mutation.mutate();
    },
    [genderValue, passwordValue, confirmPasswordValue, mutation]
  );

  return {
    handleSubmit,
    genderWarning,
    passwordsMatchWarning,
    signupError
  };
};

// 중복확인
export const useIdCheck = (email: string): UseIdCheckReturnValue => {
  const [message, setMessage] = useState("");

  const mutation = useMutation(
    () => axiosInstance.post("/member/check/email", { email }),
    {
      onSuccess: response => {
        if (response.data.code === "1000") {
          setMessage("인증되었습니다.");
        } else {
          setMessage(response.data.message);
        }
      },
      onError: () => {
        setMessage("에러가 발생했습니다.");
      }
    }
  );

  const handleIdCheck = () => {
    if (!email) {
      setMessage("아이디를 입력해주세요.");
      return;
    }

    mutation.mutate();
  };
  return {
    handleIdCheck,
    message
  };
};

export default useSiginForm;
