import { createSlice } from "@reduxjs/toolkit";

type UserType = {
  user: {
    bookmarks: [];
    createdAt: string;
    email: string;
    firstName: string;
    followers: [];
    following: [];
    id: string;
    lastName: string;
    password: string;
    updatedAt: string;
    _id: string;
  };
  isUserLoggedIn: boolean;
};
const initialState: UserType = {
  user: {
    bookmarks: [],
    createdAt: "",
    email: "",
    firstName: "",
    followers: [],
    following: [],
    id: "",
    lastName: "",
    password: "",
    updatedAt: "",
    _id: "",
  },
  isUserLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isUserLoggedIn = action.payload.userLoggedInStatus;
    },
    setBookmarks: (state, action) => {
      state.user.bookmarks = action.payload.bookmarks;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.isUserLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
