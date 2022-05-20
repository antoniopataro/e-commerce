import { createSlice } from "@reduxjs/toolkit";

const light = {
  primary: "#393D45",
  secondary: "#FFFFFF",
  tertiary: "#C2C7D2",
  background: "#F5F7FB",
  text: "#393D45",
  invertedText: "#FFFFFF",
  shadow: "rgba(0,0,0,0.25)",
};

export const slice = createSlice({
  name: "currentTheme",
  initialState: { currentTheme: light },
  reducers: {
    changeTheme: (state, { payload }) => {
      return { ...state, currentTheme: payload };
    },
  },
});

export const { changeTheme } = slice.actions;

export const selectContent = (state) => state.currentTheme;

export default slice.reducer;
