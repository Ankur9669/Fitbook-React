import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import React from "react";
import { Poststype, Posttype } from "./Posttype";
const initialState = {
  posts: [],
  loading: false,
  error: "",
};

const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
  try {
    const response = await Axios.get("/api/posts");
    return response.data as unknown as Poststype;
  } catch (e) {
    return e;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPosts.pending, (state) => {
      state.posts = [];
      state.loading = true;
      state.error = "";
    });

    // TODO find way to change any type
    builder.addCase(loadPosts.fulfilled, (state, action: any) => {
      state.posts = action.payload.posts;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(loadPosts.rejected, (state, error: any) => {
      state.posts = [];
      state.loading = false;
      state.error = error;
    });
  },
});
export { loadPosts };
export default postsSlice.reducer;
