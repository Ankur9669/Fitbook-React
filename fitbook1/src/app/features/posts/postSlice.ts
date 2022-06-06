import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { Posttype } from "./Posttype";
const initialState = {
  posts: [],
  loading: false,
  error: "",
};

const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
  try {
    const response = await Axios.get("/api/post");
    return response as unknown as Posttype;
  } catch (e) {
    return e;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [loadPosts.pending]: (state: any) => {},
  },
});
export {};
