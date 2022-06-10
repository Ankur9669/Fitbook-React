import Avatar from "../../../assets/images/avatar.svg";
import { FaSmile } from "../../../assets/icons/icons";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { useState } from "react";
import Picker from "emoji-picker-react";
import { createPost } from "../../../util/api/createPost";
import { useAppSelector } from "../../../app/hooks";
import { useAppDispatch } from "../../../app/hooks";
import { postsActions } from "../../../app/features/posts/postSlice";
import { showToast } from "../../../util/toasts/showToast";
import { getSortedPosts } from "../../../util/getSortedPosts";

export {
  Avatar,
  FaSmile,
  PrimaryButton,
  useState,
  Picker,
  createPost,
  useAppSelector,
  useAppDispatch,
  postsActions,
  showToast,
  getSortedPosts,
};
