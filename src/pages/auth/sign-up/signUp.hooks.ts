import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import axios from "axios";
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    async e => {
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

      try {
        const response = await axios.post("/api/member/signup", {
          email: idValue,
          gender: genderValue,
          nickname: nicknameValue,
          password: passwordValue
        });

        if (response.data.code === "1000") {
          router.push("/auth/email-auth"); // 회원가입 성공 시 이메일 인증 페이지로 이동
        } else {
          setSignupError(response.data.message);
        }
      } catch (error) {
        setSignupError("에러가 발생했습니다.");
      }
    },
    [
      router,
      genderValue,
      passwordValue,
      confirmPasswordValue,
      idValue,
      nicknameValue
    ] // idValue, nicknameValue 의존성 배열에 추가
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

  const handleIdCheck = async () => {
    if (!email) {
      setMessage("아이디를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("/api/member/check/email", { email });
      if (response.data.code === "1000") {
        setMessage("인증되었습니다.");
      } else {
        setMessage("중복입니다.");
      }
    } catch (error) {
      setMessage("에러가 발생했습니다.");
    }
  };

  return {
    handleIdCheck,
    message
  };
};

export default useSiginForm;
