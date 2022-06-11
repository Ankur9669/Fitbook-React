import LeftSidebar from "../../components/left-sidebar/LeftSidebar";
import RightSidebar from "../../components/right-sidebar/RightSidebar";
import CreatePostModal from "../../components/createpostmodal/CreatePostModal";
import CenterContent from "../../components/centercontent/CenterContent";
import { loadPosts } from "../../app/features/posts/postSlice";
import { useAppDispatch } from "../../app/hooks";

export {
  LeftSidebar,
  RightSidebar,
  CreatePostModal,
  CenterContent,
  loadPosts,
  useAppDispatch,
};
