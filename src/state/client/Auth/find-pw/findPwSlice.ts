import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FindPwState {
  emailAuth: string;
  emailErrorMessage: string;
  isFindPwButtonClicked: boolean;
  findPwButtonBgColor: string;
  serverAuthCode: number | null;
  authErrorMessage: string;
  isVerified: boolean;
}

const initialState: FindPwState = {
  emailAuth: "",
  emailErrorMessage: "",
  isFindPwButtonClicked: false,
  findPwButtonBgColor: "#003091",
  serverAuthCode: null,
  authErrorMessage: "",
  isVerified: false
};

const findPwSlice = createSlice({
  name: "findPw",
  initialState,
  reducers: {
    setEmailAuth: (state, action: PayloadAction<string>) => {
      state.emailAuth = action.payload;
    },
    setEmailErrorMessage: (state, action: PayloadAction<string>) => {
      state.emailErrorMessage = action.payload;
    },
    setIsFindPwButtonClicked: (state, action: PayloadAction<boolean>) => {
      state.isFindPwButtonClicked = action.payload;
    },
    setFindPwButtonBgColor: (state, action: PayloadAction<string>) => {
      state.findPwButtonBgColor = action.payload;
    },
    setServerAuthCode: (state, action: PayloadAction<number | null>) => {
      state.serverAuthCode = action.payload;
    },
    setAuthErrorMessage: (state, action: PayloadAction<string>) => {
      state.authErrorMessage = action.payload;
    },
    setIsVerified: (state, action: PayloadAction<boolean>) => {
      state.isVerified = action.payload;
    }
  }
});

export const {
  setEmailAuth,
  setEmailErrorMessage,
  setIsFindPwButtonClicked,
  setFindPwButtonBgColor,
  setServerAuthCode,
  setAuthErrorMessage,
  setIsVerified
} = findPwSlice.actions;

export default findPwSlice.reducer;
