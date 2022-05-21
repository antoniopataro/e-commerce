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
  },
});

export const { addFavorite, removeFavorite } = slice.actions;

export const selectContent = (state) => state.userFavorites;

export default slice.reducer;
