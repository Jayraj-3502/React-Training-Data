import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/products/product";
import { userReducer } from "../features/users/user";

export const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
});
