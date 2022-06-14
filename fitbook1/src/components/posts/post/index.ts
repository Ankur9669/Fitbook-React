import Avatar from "../../../assets/images/avatar.svg";
import {
  AiFillHeart,
  AiOutlineHeart,
  BiCommentDetail,
  BsBookmark,
  FiMoreHorizontal,
  BsBookmarkFill,
} from "../../../assets/icons/icons";

import PostModal from "./postmodal/PostModal";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { findLiked } from "../../../util/findLiked";
import { addPostLike } from "../../../util/api/addPostLike";
import { useAppDispatch } from "../../centercontent/createpost";
import { postsActions } from "../../centercontent/createpost";
import { showToast } from "../../centercontent/createpost";
import { removePostLike } from "../../../util/api/removePostLike";
import { removeFromBookmark } from "../../../util/api/removefromBookmark";
import { addToBookmark } from "../../../util/api/addToBookmark";
import { findBookMarked } from "../../../util/findBookMarked";
import { authActions } from "../../../app/features/auth/authSlice";

export {
  Avatar,
  AiFillHeart,
  AiOutlineHeart,
  BiCommentDetail,
  BsBookmark,
  BsBookmarkFill,
  FiMoreHorizontal,
  PostModal,
  useNavigate,
  useAppSelector,
  findLiked,
  addPostLike,
  useAppDispatch,
  postsActions,
  showToast,
  removePostLike,
  removeFromBookmark,
  addToBookmark,
  findBookMarked,
  authActions,
};
