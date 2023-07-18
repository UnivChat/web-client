import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import { useRouter } from "next/router";
import { createAxiosInstance } from "@server-state/axios";
import { clearEmail } from "@client-state/changepw/emailSlice";
import type { UseChangePwReturnType } from "./changePw.type";

export const useChangePw = (): UseChangePwReturnType => {
  const email = useAppSelector(({ email }) => email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const axiosInstance = createAxiosInstance({ needAuth: true });
  const router = useRouter();
  const dispatch = useAppDispatch();

  const mutation = useMutation(
    () =>
      axiosInstance.post("/member/change/password", {
        email,
        password
      }),
    {
      onSuccess: () => {
        setPassword("");
        setConfirmPassword("");
        setSuccessMessage("비밀번호가 변경되었습니다.");
        setErrorMessage("");
        dispatch(clearEmail());
        router.push("/auth/sign-in");
      },
      onError: () => {
        setErrorMessage("비밀번호 변경에 실패했습니다.");
        setSuccessMessage("");
      }
    }
  );

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangePwButtonClick = () => {
    if (!password || !confirmPassword) {
      setErrorMessage("비밀번호를 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }

    mutation.mutate();
  };

  return {
    password,
    confirmPassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleChangePwButtonClick,
    errorMessage,
    successMessage
  };
};
