import PrimaryButton from "../../buttons/PrimaryButton";
import {
  IoChevronBack,
  AiFillHeart,
  AiOutlineHeart,
  BiCommentDetail,
  BsBookmark,
  FiMoreHorizontal,
  FaUserCircle,
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

export {
  PrimaryButton,
  IoChevronBack,
  AiFillHeart,
  BiCommentDetail,
  BsBookmark,
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
};
