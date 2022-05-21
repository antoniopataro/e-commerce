import { createSlice } from "@reduxjs/toolkit";

const light = {
  primary: "#393D45",
  secondary: "#FFFFFF",
  tertiary: "#C2C7D2",
  background: "#F5F7FB",
  text: "#393D45",
  invertedText: "#FFFFFF",
  shadow: "rgba(0,0,0,0.25)",
  filter: "invert(0%)",
  indicator: "#000000",
};

const dark = {
  primary: "#FFFFFF",
  secondary: "#303238",
  tertiary: "#C2C7D2",
  background: "#1E2023",
  text: "#FFFFFF",
  invertedText: "#393D45",
  shadow: "rgba(0,0,0,0.25)",
  filter: "invert(50%)",
  indicator: "#FFFFFF",
};

// const dark = {
//   primary: "#393D45",
//   secondary: "#FFFFFF",
//   tertiary: "#C2C7D2",
//   background: "#F5F7FB",
//   text: "#393D45",
//   invertedText: "#FFFFFF",
//   shadow: "rgba(0,0,0,0.25)",
// };

export const slice = createSlice({
  name: "currentTheme",
  initialState: { currentTheme: light },
  reducers: {
    changeTheme: (state, { payload }) => {
      return { ...state, currentTheme: payload === "light" ? light : dark };
    },
  },
});

export const { changeTheme } = slice.actions;

export const selectContent = (state) => state.currentTheme;

export default slice.reducer;
