/* eslint-disable no-param-reassign */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { InitialState } from "./slice.types";

const initialState: InitialState = {
  isTablet: true
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setDeviceType: (state, { payload }: PayloadAction<true | undefined>) => {
      state.isTablet = payload;
    }
  }
});

export const { setDeviceType } = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
