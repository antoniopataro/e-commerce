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
          if (product.id === payload.id) {
            return;
          }
          return product;
        }),
      };
    },
    increaseQuantity: (state, { payload }) => {
      const newPayload = [...state.userCart].map((product) => {
        if (product.id === payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

      return { ...state, userCart: newPayload };
    },
  },
});

export const { addProduct, removeProduct, increaseQuantity } = slice.actions;

export const selectContent = (state) => state.userCart;

export default slice.reducer;
