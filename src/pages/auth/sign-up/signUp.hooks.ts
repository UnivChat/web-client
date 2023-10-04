import * as signUpSlice from "@client-state/Auth/signUp/signUpSlice";
import { useAppDispatch, useAppSelector } from "@client-state/hooks";
import { useIdCheckMutation, useSubmitMutation } from "@server-state/auth";
import { useCheckNicknameDuplicate } from "@server-state/config/hooks/checkNickname.mutaion";
import type { ChangeEventHandler } from "react";
import { useCallback, useState } from "react";
import { regex } from "~/constants/regex";
import type {
  UseIdCheckReturnValue,
  UseNicknameCheckReturnValue,
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
  idCheck: UseIdCheckReturnValue,
  nicknameCheck: UseNicknameCheckReturnValue
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

      if (nicknameCheck.nickNameisDuplicate) {
        dispatch(signUpSlice.setNickNameMessage("중복된 닉네임입니다."));
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

      if (!nicknameValue) {
        dispatch(signUpSlice.setNickNameMessage("닉네임을 입력해주세요."));
        dispatch(signUpSlice.setNickNameMessageType("error"));
        return;
      }

      // 아이디 중복확인을 안했을 경우
      if (!idCheck.isChecked) {
        dispatch(signUpSlice.setMessage("아이디 중복확인을 해주세요."));
        return;
      }

      // 닉네임 중복확인을 안했을 경우
      if (!nicknameCheck.isChecked) {
        dispatch(signUpSlice.setNickNameMessage("닉네임 중복확인을 해주세요."));
        return;
      }

      mutation.mutate({ idValue, genderValue, nicknameValue, passwordValue });
    },
    [
      idCheck.isDuplicate,
      idCheck.isChecked,
      nicknameCheck.nickNameisDuplicate,
      nicknameCheck.isChecked,
      genderValue,
      dispatch,
      passwordValue,
      confirmPasswordValue,
      nicknameValue,
      mutation,
      idValue
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

  const [isChecked, setIsChecked] = useState(false);

  const handleIdCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // 중복 확인 눌렀을 때 라우팅 되는 문제
    setIsChecked(true);
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
    isDuplicate,
    isChecked
  };
};

// 닉네임 중복확인
export const useNicknameCheck = (
  nickname: string
): UseNicknameCheckReturnValue => {
  const dispatch = useAppDispatch();

  const { nickNameMessage, nickNameMessageType, nickNameisDuplicate } =
    useAppSelector(state => state.signup);

  const mutation = useCheckNicknameDuplicate();

  const [isChecked, setIsChecked] = useState(false);

  const handleNicknameCheck = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // 중복 확인 눌렀을 때 라우팅 되는 문제
    setIsChecked(true);
    if (!nickname) {
      dispatch(signUpSlice.setNickNameMessage("닉네임을 입력해주세요."));
      dispatch(signUpSlice.setNickNameMessageType("error"));
      return;
    }

    mutation.mutate(nickname);
  };

  return {
    handleNicknameCheck,
    nickNameMessage,
    nickNameMessageType,
    nickNameisDuplicate,
    isChecked
  };
};

export default useSiginForm;
