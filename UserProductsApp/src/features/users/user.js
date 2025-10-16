import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 45464,
      name: "Jai",
      email: "rathodjairaj805@gmail.com",
      password: "asdasd",
    },
  ],
  currentUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = { id: nanoid(), ...action.payload };
      state.users.push(user);
    },
    addCurrentUser: (state, action) => {},
    removeCurrentUser: (state, action) => {},
  },
});

export const { addUser, addCurrentUser, removeCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
