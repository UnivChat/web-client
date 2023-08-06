import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ChangePwState {
  password: string;
  confirmPassword: string;
  errorMessage: string;
  successMessage: boolean;
}

const initialState: ChangePwState = {
  password: "",
  confirmPassword: "",
  errorMessage: "",
  successMessage: false
};

const changePwSlice = createSlice({
  name: "changePw",
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setSuccessMessage: (state, action: PayloadAction<boolean>) => {
      state.successMessage = action.payload;
    },
    clearChangePw: state => {
      state.password = "";
      state.confirmPassword = "";
      state.errorMessage = "";
      state.successMessage = false;
    }
  }
});

export const {
  setPassword,
  setConfirmPassword,
  setErrorMessage,
  setSuccessMessage,
  clearChangePw
} = changePwSlice.actions;

export default changePwSlice.reducer;
