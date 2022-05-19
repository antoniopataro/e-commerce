import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "userCart",
  initialState: { userCart: [] },
  reducers: {
    addProduct: (state, { payload }) => {
      return { ...state, userCart: [...state.userCart, payload] };
    },
    removeProduct: (state, { payload }) => {
      return {
        ...state,
        userCart: [...state.userCart].filter((product) => {
          if (product.id === payload) {
            return;
          }
          return product;
        }),
      };
    },
    increaseQuantity: (state, { payload }) => {
      console.log(payload);

      return { ...state, userCart: [...state.userCart] };
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity } = slice.actions;

export const selectContent = (state) => state.userCart;

export default slice.reducer;
