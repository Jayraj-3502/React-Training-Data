import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  users: [],
  currentUser: {},
  userExist: false,
};

// export const getUsersDetails = createAsyncThunk(
//   "user/getUsersDetails",
//   async () => {
//     const responce = await axios.get("http://localhost:3000/users");
//     console.log(responce.data);
//     return responce.data;
//   }
// );

// export const addNewUser = createAsyncThunk("user/addNewUser", async (data) => {
//   const responce = await axios.post("http://localhost:3000/users", data);
//   return responce.data;
// });

// export const removeUser = createAsyncThunk("user/removeUser", async () => {
//   const responce = await axios.delete(`http://localhost:3000/users/${id}`);
//   return responce.data;
// });

// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async (id, data) => {
//     const responce = await axios.put(`http://localhost:3000/users/${id}`, data);
//   }
// );

// export const addWatchList = createAsyncThunk(
//   "user/addWatchList",
//   async (id, data) => {
//     const responce = await axios.post(
//       `http://localhost:3000/users/${id}`,
//       data
//     );
//   }
// );

function setLocalData(data) {
  localStorage.setItem("mmaCurrentUser", JSON.stringify(data));
}

function getLocalData() {
  const responce = JSON.parse(localStorage.getItem("mmaCurrentUser"));
  return responce;
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.userExist = true;
      toast.success("User Logged In Successfully");
      setLocalData(action.payload);
    },
    getCurrentUser: (state, action) => {
      const res = getLocalData();
      if (res) {
        state.currentUser = res;
        state.userExist = true;
        toast.success("User Logged In Successfully");
      }
    },
    removeCurrentUser: (state, action) => {
      state.users = state.users.map((item) => {
        if (item.id === state.currentUser.id) {
          return state.currentUser;
        } else {
          return item;
        }
      });
      localStorage.setItem("mmaUsersData", JSON.stringify(state.users));
      state.currentUser = {};
      state.userExist = false;
      toast.success("User Logged Out Successfully");
      setLocalData("");
    },
    addWatchList: (state, action) => {
      state.currentUser.watch_later.find((item) => {
        if (item.movieId === action.payload.movieId) {
          return true;
        }
      }) || state.currentUser.watch_later.push(action.payload);
      setLocalData(state.currentUser);
      toast.success("Item added to Watch Later List");
    },
    removeWatchList: (state, action) => {
      state.currentUser.watch_later = state.currentUser.watch_later.filter(
        (item) => {
          if (item.movieId !== action.payload) {
            return item;
          }
        }
      );
      setLocalData(state.currentUser);
      toast.success("Item removed from Watch Later List");
    },
    addFavoritesList: (state, action) => {
      state.currentUser.favirout_list.find((item) => {
        if (item.movieId === action.payload.movieId) {
          return true;
        }
      }) || state.currentUser.favirout_list.push(action.payload);
      setLocalData(state.currentUser);
      toast.success("Item added to Favirouter List");
    },
    removeFavrouteList: (state, action) => {
      state.currentUser.favirout_list = state.currentUser.favirout_list.filter(
        (item) => {
          if (item.movieId !== action.payload) {
            return item;
          }
        }
      );
      setLocalData(state.currentUser);
      toast.success("Item removed from Favirout List");
    },
    addRecentlyViewed: (state, action) => {
      try {
        state.currentUser.recently_viewed.find((item) => {
          if (item.movieId === action.payload.movieId) {
            return true;
          }
        }) || state.currentUser.recently_viewed.push(action.payload);
        setLocalData(state.currentUser);
        toast.success("Item added to Recent Viewed List");
      } catch (err) {
        console.log("This is Error: ", err);
      }
    },
    removeRecentlyViewed: (state, action) => {
      state.currentUser.recently_viewed =
        state.currentUser.recently_viewed.filter((item) => {
          if (item.movieId !== action.payload) {
            return item;
          }
        });
      setLocalData(state.currentUser);
      toast.success("Item removed from Recently Viewed List");
    },
    getUsersDetails: (state, action) => {
      const data = JSON.parse(localStorage.getItem("mmaUsersData"));
      console.log(data);
      if (data) {
        state.users = data;
      } else {
        state.users = [];
      }
    },
    addNewUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("mmaUsersData", JSON.stringify(state.users));
      toast.success("New User Added Successfully");
    },
  },
});

export const userReducer = userSlice.reducer;
export const {
  setCurrentUser,
  getCurrentUser,
  removeCurrentUser,
  addFavoritesList,
  addWatchList,
  addNewUser,
  getUsersDetails,
  removeFavrouteList,
  removeWatchList,
  addRecentlyViewed,
  removeRecentlyViewed,
} = userSlice.actions;
