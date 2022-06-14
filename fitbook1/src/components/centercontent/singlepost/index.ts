import PrimaryButton from "../../buttons/PrimaryButton";
import {
  IoChevronBack,
  AiFillHeart,
  AiOutlineHeart,
  BiCommentDetail,
  BsBookmark,
  FiMoreHorizontal,
  FaUserCircle,
  BsBookmarkFill,
} from "../../../assets/icons/icons";
import Avatar from "../../../assets/images/avatar.svg";
import Comment from "./comment/Comment";
import { useNavigate, useParams } from "react-router";
import { getSinglePost } from "../../../util/api/getSinglePost";
import { showToast } from "../../../util/toasts/showToast";
import { addComment } from "../../../util/api/addComment";
import { useAppSelector } from "../../../app/hooks";
import { findLiked } from "../../../util/findLiked";
import { findBookMarked } from "../../../util/findBookMarked";
import { addToBookmark } from "../../../util/api/addToBookmark";
import { removeFromBookmark } from "../../../util/api/removefromBookmark";
import { useAppDispatch } from "../../../app/hooks";
import { authActions } from "../../../app/features/auth/authSlice";
import { addPostLike } from "../../../util/api/addPostLike";
import { removePostLike } from "../../../util/api/removePostLike";

export {
  PrimaryButton,
  IoChevronBack,
  AiFillHeart,
  BiCommentDetail,
  BsBookmark,
  BsBookmarkFill,
  FiMoreHorizontal,
  FaUserCircle,
  Avatar,
  Comment,
  useNavigate,
  useParams,
  getSinglePost,
  showToast,
  addComment,
  useAppSelector,
  findLiked,
  findBookMarked,
  addToBookmark,
  removeFromBookmark,
  useAppDispatch,
  authActions,
  addPostLike,
  removePostLike,
};
