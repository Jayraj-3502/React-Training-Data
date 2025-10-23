import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { use } from "react";

const initialState = {
  users: [],
  currentUser: {},
};

export const gettingUsersData = createAsyncThunk(
  "user/gettingUsersData",
  async () => {
    try {
      const responce = await axios.get("http://localhost:3000/users");
      console.log(responce.data);
      return responce.data;
    } catch (err) {}
  }
);

export const addUser = createAsyncThunk("user/addUser", async (data) => {
  data.id = nanoid();
  try {
    const responce = await axios.post(`http://localhost:3000/users`, data);
    return { status: responce.status, data: responce.data };
  } catch (err) {}
});

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
    setCurrentUser: (state, action) => {
      settingCurrentUser(state, action.payload);
    },
    getCurrentUser: (state, action) => {
      gettingCurrentUser(state);
    },
    removeCurrentUser: (state, action) => {
      state.currentUser = {};
      settingCurrentUser(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Getting users data on initial launch
      .addCase(gettingUsersData.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(gettingUsersData.fulfilled, (state, action) => {
        state.users = action.payload;
        // console.log(action.payload);
      })
      .addCase(gettingUsersData.rejected, (state, action) => {
        console.log("rejected");
      })

      //Adding user in database
      .addCase(addUser.pending, (state, action) => {})
      .addCase(addUser.fulfilled, (state, action) => {
        if (action.payload.status === 201) {
          settingCurrentUser(state, action.payload.data);
          state.users.push(action.payload.data);
        }
      })
      .addCase(addUser.rejected, (state, action) => {});
  },
});

export const {
  addCurrentUser,
  removeCurrentUser,
  getCurrentUser,
  setCurrentUser,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
