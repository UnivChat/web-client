import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface modalType {
  modalState: boolean;
  mapState: boolean;
}

const initialState: modalType = {
  modalState: false,
  mapState: false
};

export const facilitiesSlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {
    setModalState: (state, action: PayloadAction<boolean>) => {
      state.modalState = action.payload;
    },
    setMapState: (state, action: PayloadAction<boolean>) => {
      state.mapState = action.payload;
    }
  }
});

export const { setModalState, setMapState } = facilitiesSlice.actions;

export default facilitiesSlice.reducer;
