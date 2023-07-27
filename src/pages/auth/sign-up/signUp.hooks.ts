import { useCallback } from "react";
import { emailRegex } from "~/constants/emailRegex";
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
  const name = useAppSelector(state => state.signup.name);

  const id = useAppSelector(state => state.signup.id);
  const password = useAppSelector(state => state.signup.password);
  const confirmPassword = useAppSelector(state => state.signup.confirmPassword);
  const nickname = useAppSelector(state => state.signup.nickname);
  const gender = useAppSelector(state => state.signup.gender);

  const handleGenderButtonClick = (selectedGender: "male" | "female") => {
    dispatch(signUpSlice.setGender(selectedGender));
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signUpSlice.setName(e.target.value));
  };
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signUpSlice.setId(e.target.value));
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signUpSlice.setPassword(e.target.value));
  };
  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signUpSlice.setConfirmPassword(e.target.value));
  };
  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signUpSlice.setNickname(e.target.value));
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

  const genderWarning = useAppSelector(state => state.signup.genderWarning);
  const passwordsMatchWarning = useAppSelector(
    state => state.signup.passwordsMatchWarning
  );
  const signupError = useAppSelector(state => state.signup.signupError);
  const message = useAppSelector(state => state.signup.message);

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

  const message = useAppSelector(state => state.signup.message);
  const messageType = useAppSelector(state => state.signup.messageType);
  const isDuplicate = useAppSelector(state => state.signup.isDuplicate);

  const mutation = useIdCheckMutation();

  const handleIdCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // 중복 확인 눌렀을 때 라우팅 되는 문제
    if (!email) {
      dispatch(signUpSlice.setMessage("아이디를 입력해주세요."));
      dispatch(signUpSlice.setMessageType("error"));
      return;
    }

    if (!emailRegex.test(email)) {
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
