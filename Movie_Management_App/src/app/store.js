import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "../feature/movies";
import { userReducer } from "../feature/users";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
