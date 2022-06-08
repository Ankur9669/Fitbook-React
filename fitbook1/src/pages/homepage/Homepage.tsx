import {
  LeftSideBar,
  RightSidebar,
  CenterContent,
  MobileFooter,
  CreatePostModal,
  FloatingButton,
} from "./index";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { loadPosts } from "../../app/features/posts/postSlice";
import { useEffect } from "react";

const Homepage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { posts, loading, error } = useAppSelector((store) => store.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  return (
    <div className="app-container">
      {isModalOpen && <CreatePostModal setModalOpen={setModalOpen} />}
      <LeftSideBar setModalOpen={setModalOpen} />
      <CenterContent />
      <RightSidebar />
      <MobileFooter />
      <FloatingButton setModalOpen={setModalOpen} />
    </div>
  );
};

export default Homepage;
