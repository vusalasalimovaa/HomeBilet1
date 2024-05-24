import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../services/product.js";
import basketReducer from "./BasketSlice.js"
import favReducer from "./FavSlice.js"

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    fav:favReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
