import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SignInType = {
  message: boolean;
};

const initialState: SignInType = {
  message: false
};

export const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setLoginError: (state, action: PayloadAction<boolean>) => {
      state.message = action.payload;
    }
  }
});

export const { setLoginError } = signinSlice.actions;

export default signinSlice.reducer;
