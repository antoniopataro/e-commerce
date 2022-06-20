import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import favoritesReducer from './favoritesSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    category: categoryReducer,
    favorites: favoritesReducer
  }
});
