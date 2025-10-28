import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "../feature/movies";
import { userReducer } from "../feature/users";
import { themeReducer } from "../feature/theme";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
    theme: themeReducer,
  },
});
