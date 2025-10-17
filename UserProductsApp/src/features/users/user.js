import { createSlice, nanoid } from "@reduxjs/toolkit";
import { use } from "react";

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

function settingCurrentUser(state, data) {
  try {
    console.log(data);
    localStorage.setItem("userProfile", JSON.stringify(data));
    gettingCurrentUser(state);
  } catch (err) {
    console.log("got Error: ", err);
  }
}

function gettingCurrentUser(state) {
  try {
    const responce = localStorage.getItem("userProfile") ?? {};
    const userData = JSON.parse(responce);
    state.currentUser = userData;
    console.log("Running");
  } catch (err) {
    console.log("Got Error:", err);
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = { id: nanoid(), ...action.payload };
      state.users.push(user);
      settingCurrentUser(state, action.payload);
    },
    setCurrentUser: (state, action) => {
      settingCurrentUser(state, action.payload);
    },
    getCurrentUser: (state, action) => {
      gettingCurrentUser(state);
    },
    removeCurrentUser: (state, action) => {
      state.currentUser = {};
      this.setCurrentUser(action.payload);
    },
  },
});

export const {
  addUser,
  addCurrentUser,
  removeCurrentUser,
  getCurrentUser,
  setCurrentUser,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
