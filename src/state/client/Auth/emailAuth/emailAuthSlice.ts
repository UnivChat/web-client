import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface EmailAuthState {
  email: string;
  emailAuth: string;
  emailErrorMessage: string;
  isEmailAuthButtonClicked: boolean;
  emailAuthButtonBgColor: string;
  serverAuthCode: number | null;
  authErrorMessage: string;
  isVerified: boolean;
}

const initialState: EmailAuthState = {
  email: "",
  emailAuth: "",
  emailErrorMessage: "",
  isEmailAuthButtonClicked: false,
  emailAuthButtonBgColor: "#003091",
  serverAuthCode: null,
  authErrorMessage: "",
  isVerified: false
};

export const emailAuthSlice = createSlice({
  name: "emailAuth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setEmailAuth: (state, action: PayloadAction<string>) => {
      state.emailAuth = action.payload;
    },
    setEmailErrorMessage: (state, action: PayloadAction<string>) => {
      state.emailErrorMessage = action.payload;
    },
    setIsEmailAuthButtonClicked: (state, action: PayloadAction<boolean>) => {
      state.isEmailAuthButtonClicked = action.payload;
    },
    setEmailAuthButtonBgColor: (state, action: PayloadAction<string>) => {
      state.emailAuthButtonBgColor = action.payload;
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
  setEmail,
  setEmailAuth,
  setEmailErrorMessage,
  setIsEmailAuthButtonClicked,
  setEmailAuthButtonBgColor,
  setServerAuthCode,
  setAuthErrorMessage,
  setIsVerified
} = emailAuthSlice.actions;

export default emailAuthSlice.reducer;
