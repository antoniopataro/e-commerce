import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "userFavorites",
  initialState: { userFavorites: [] },
  reducers: {
    addFavorite: (state, { payload }) => {
      return { ...state, userFavorites: [...state.userFavorites, payload] };
    },
    removeFavorite: (state, { payload }) => {
      return {
        ...state,
        userFavorites: [...state.userFavorites].filter((product) => {
          if (product.id === payload.id) {
            return;
          }
          return product;
        }),
      };
    },
    increaseFavoriteQuantity: (state, { payload }) => {
      const newPayload = [...state.userFavorites].map((product) => {
        if (product.id === payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

      return { ...state, userFavorites: newPayload };
    },
  },
});

export const { addFavorite, removeFavorite, increaseFavoriteQuantity } =
  slice.actions;

export const selectContent = (state) => state.userFavorites;

export default slice.reducer;
