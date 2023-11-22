import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface modalType {
  otoModalState: boolean;
  otoMemberName: string;
}

const initialState: modalType = {
  otoModalState: false,
  otoMemberName: ""
};

export const otoModalSlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {
    setOtoModalState: (state, action: PayloadAction<boolean>) => {
      state.otoModalState = action.payload;
    },
    setOtoMemberName: (state, action: PayloadAction<string>) => {
      state.otoMemberName = action.payload;
    }
  }
});

export const { setOtoModalState, setOtoMemberName } = otoModalSlice.actions;

export default otoModalSlice.reducer;
