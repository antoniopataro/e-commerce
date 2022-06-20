import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'currentCategory',
  initialState: { currentCategory: 'Polo Shirt' },
  reducers: {
    changeCategory: (state, { payload }) => {
      return { ...state, currentCategory: payload };
    }
  }
});

export const { changeCategory } = slice.actions;

export const selectContent = (state) => state.currentCategory;

export default slice.reducer;
