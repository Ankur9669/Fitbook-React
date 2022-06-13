import LeftSidebar from "../../components/left-sidebar/LeftSidebar";
import RightSidebar from "../../components/right-sidebar/RightSidebar";
import CenterContent from "../../components/centercontent/CenterContent";
import { useAppDispatch } from "../../app/hooks";
import { useAppSelector } from "../../app/hooks";
import { getUserPosts } from "../../util/api/getUserPosts";
import { postsActions } from "../../app/features/posts/postSlice";

export {
  LeftSidebar,
  RightSidebar,
  CenterContent,
  useAppDispatch,
  useAppSelector,
  getUserPosts,
  postsActions,
};
