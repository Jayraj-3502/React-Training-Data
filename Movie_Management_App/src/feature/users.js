import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addNewUser: (state, action) => {},
    addCurrentUser: (state, action) => {},
    removeCurrentUser: (state, action) => {},
    updateWatchList: (state, action) => {
      state.currentUser.watchList.push(action.payload);
      state.users = state.users.map((user) => {
        if (user.id === state.currentUser.id) {
          user.watchList.push(action.payload);
          return user;
        }
        return user;
      });
    },
    updateFavorites: (state, action) => {
      state.currentUser.favorites.push(action.payload);
      state.users = state.users.map((user) => {
        if (user.id === state.currentUser.id) {
          user.favorites.push(action.payload);
          return user;
        }
        return user;
      });
    },
  },
});
