import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  classNum: ""
};

export const classNumSlice = createSlice({
  name: "classNum",
  initialState,
  reducers: {
    setClassNum: (state, action: PayloadAction<string>) => {
      state.classNum = action.payload;
    }
  }
});

export const { setClassNum } = classNumSlice.actions;

export default classNumSlice.reducer;
