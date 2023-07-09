import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
  name: "email",
  initialState: "",
  reducers: {
    setEmail: (state, action) => action.payload,
    clearEmail: () => ""
  }
});

export const { setEmail, clearEmail } = emailSlice.actions;

export default emailSlice.reducer;
