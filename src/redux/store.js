import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./themeSlice";
import categoryReducer from "./categorySlice";
import cartReducer from "./cartSlice";
import favoritesReducer from "./favoritesSlice.js";

export default configureStore({
  reducer: {
    theme: themeReducer,
    category: categoryReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});
