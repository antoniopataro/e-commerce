import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import themeReducer from "./themeSlice";
import categoryReducer from "./categorySlice";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    category: categoryReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
