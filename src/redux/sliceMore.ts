import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface modelInital {
  small: boolean;
  submenu: boolean;
}

const initialState: modelInital = {
  small: false,
  submenu: false,
};

const sliceMore = createSlice({
  name: "more",
  initialState,
  reducers: {
    setSmall: (state, action: PayloadAction<boolean>) => {
      state.small = action.payload;
    },
    setSubmenu: (state, action: PayloadAction<boolean>) => {
      state.submenu = action.payload;
    },
  },
});

export const { setSmall, setSubmenu } = sliceMore.actions;

export default sliceMore.reducer;
