import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "userCart",
  initialState: { userCart: [] },
  reducers: {
    addProduct: (state, { payload }) => {
      return { ...state, userCart: [...state.userCart, payload] };
    },
  },
});

export const { addProduct } = slice.actions;

export const selectContent = (state) => state.userCart;

export default slice.reducer;
