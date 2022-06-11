import Post from "./post/Post";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { getSortedPosts } from "../../util/getSortedPosts";
import { postsActions } from "../../app/features/posts/postSlice";

export { Post, useAppDispatch, useAppSelector, getSortedPosts, postsActions };
