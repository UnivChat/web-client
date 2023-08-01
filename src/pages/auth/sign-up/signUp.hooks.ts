import { useCallback } from "react";
import type { ChangeEventHandler } from "react";
import { regex } from "~/constants/regex";
import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import * as signUpSlice from "@client-state/Auth/signUp/signUpSlice";
import { useIdCheckMutation, useSubmitMutation } from "@server-state/auth";
import type {
  UseIdCheckReturnValue,
  UseSiginFormReturnValue,
  UseSubmitReturnValue
} from "./signUp.type";

// 회원가입 폼
export const useSiginForm = (): UseSiginFormReturnValue => {
  const dispatch = useAppDispatch();

  const { name, id, password, confirmPassword, nickname, gender } =
    useAppSelector(state => state.signup);

  const handleGenderButtonClick = (selectedGender: "male" | "female") => {
    dispatch(signUpSlice.setGender(selectedGender));
  };
  const onChangeName: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(signUpSlice.setSignUpInfo({ key: "name", value: e.target.value }));
  };
  const onChangeId: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(signUpSlice.setSignUpInfo({ key: "id", value: e.target.value }));
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(
      signUpSlice.setSignUpInfo({ key: "password", value: e.target.value })
    );
  };
  const onChangeConfirmPassword: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(
      signUpSlice.setSignUpInfo({
        key: "confirmPassword",
        value: e.target.value
      })
    );
  };
  const onChangeNickname: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(
      signUpSlice.setSignUpInfo({ key: "nickname", value: e.target.value })
    );
  };

  return {
    name: { value: name, onChange: onChangeName },
    id: { value: id, onChange: onChangeId },
    password: { value: password, onChange: onChangePassword },
    confirmPassword: {
      value: confirmPassword,
      onChange: onChangeConfirmPassword
    },
    nickname: { value: nickname, onChange: onChangeNickname },
    gender: {
      value: gender,
      handleGenderButtonClick
    },
    handleGenderButtonClick
  };
};

// 폼 제출 시 성별, 비밀번호 중복 체크 확인 후 다음 페이지로 이동
export const useSubmit = (
  genderValue: "male" | "female" | undefined,
  passwordValue: string,
  confirmPasswordValue: string,
  idValue: string,
  nicknameValue: string,
  idCheck: UseIdCheckReturnValue
): UseSubmitReturnValue => {
  const dispatch = useAppDispatch();

  const { genderWarning, passwordsMatchWarning, signupError, message } =
    useAppSelector(state => state.signup);

  const mutation = useSubmitMutation();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    e => {
      e.preventDefault();

      if (idCheck.isDuplicate) {
        dispatch(signUpSlice.setMessage("아이디가 중복입니다."));
        return;
      }

      if (!genderValue) {
        dispatch(signUpSlice.setGenderWarning(true));
        return;
      }
      dispatch(signUpSlice.setGenderWarning(false));

      if (passwordValue !== confirmPasswordValue) {
        dispatch(signUpSlice.setPasswordsMatchWarning(true));
        return;
      }
      dispatch(signUpSlice.setPasswordsMatchWarning(false));

      mutation.mutate({ idValue, genderValue, nicknameValue, passwordValue });
    },
    [
      genderValue,
      passwordValue,
      confirmPasswordValue,
      mutation,
      idCheck.isDuplicate,
      idValue,
      nicknameValue,
      dispatch
    ]
  );

  return {
    handleSubmit,
    genderWarning,
    passwordsMatchWarning,
    signupError,
    message
  };
};

// 아이디 중복확인
export const useIdCheck = (email: string): UseIdCheckReturnValue => {
  const dispatch = useAppDispatch();

  const { message, messageType, isDuplicate } = useAppSelector(
    state => state.signup
  );

  const mutation = useIdCheckMutation();

  const handleIdCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // 중복 확인 눌렀을 때 라우팅 되는 문제
    if (!email) {
      dispatch(signUpSlice.setMessage("아이디를 입력해주세요."));
      dispatch(signUpSlice.setMessageType("error"));
      return;
    }

    if (!regex.email.test(email)) {
      dispatch(signUpSlice.setMessage("이메일 형식으로 입력해주세요."));
      dispatch(signUpSlice.setMessageType("error"));
      return;
    }

    mutation.mutate(email);
  };

  return {
    handleIdCheck,
    message,
    messageType,
    isDuplicate
  };
};

export default useSiginForm;
