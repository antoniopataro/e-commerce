import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'toastContent',
  initialState: { toastContent: '' },
  reducers: {
    toast: (state, { payload }) => {
      return { ...state, toastContent: payload };
    }
  }
});

export const { toast } = slice.actions;

export const selectContent = (state) => state.toastContent;

export default slice.reducer;
