import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface inquiryState {
  isInquiryModal: boolean;
}

const initialState: inquiryState = {
  isInquiryModal: false
};

export const inquirySlice = createSlice({
  name: "inquiry",
  initialState,
  reducers: {
    setIsInquiryModal: (state, action: PayloadAction<boolean>) => {
      state.isInquiryModal = action.payload;
    }
  }
});

export const { setIsInquiryModal } = inquirySlice.actions;

export default inquirySlice.reducer;
