import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SignupState = {
  name: string;
  id: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  gender: "male" | "female" | undefined;
  genderWarning: boolean;
  passwordsMatchWarning: boolean;
  signupError: string;
  message: string;
  messageType: "error" | "success";
  isDuplicate: boolean;
};

const initialState: SignupState = {
  name: "",
  id: "",
  password: "",
  confirmPassword: "",
  nickname: "",
  gender: undefined,
  genderWarning: false,
  passwordsMatchWarning: false,
  signupError: "",
  message: "",
  messageType: "error",
  isDuplicate: false
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setGender: (
      state,
      action: PayloadAction<"male" | "female" | undefined>
    ) => {
      state.gender = action.payload;
    },
    setGenderWarning: (state, action: PayloadAction<boolean>) => {
      state.genderWarning = action.payload;
    },
    setPasswordsMatchWarning: (state, action: PayloadAction<boolean>) => {
      state.passwordsMatchWarning = action.payload;
    },
    setSignupError: (state, action: PayloadAction<string>) => {
      state.signupError = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setMessageType: (state, action: PayloadAction<"error" | "success">) => {
      state.messageType = action.payload;
    },
    setIsDuplicate: (state, action: PayloadAction<boolean>) => {
      state.isDuplicate = action.payload;
    }
  }
});

export const {
  setName,
  setId,
  setPassword,
  setConfirmPassword,
  setNickname,
  setGender,
  setGenderWarning,
  setPasswordsMatchWarning,
  setSignupError,
  setMessage,
  setMessageType,
  setIsDuplicate
} = signupSlice.actions;

export default signupSlice.reducer;
