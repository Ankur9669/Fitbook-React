import React, { useState, useEffect } from "react";
import MobileFooter from "../../components/mobile-footer/MobileFooter";
import {
  LeftSidebar,
  RightSidebar,
  CreatePostModal,
  CenterContent,
  loadPosts,
  useAppDispatch,
} from "./index";

const Explore = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  return (
    <div className="app-container">
      {isModalOpen && <CreatePostModal setModalOpen={setModalOpen} />}
      <LeftSidebar setModalOpen={setModalOpen} />
      <CenterContent />
      <RightSidebar />
      <MobileFooter />
    </div>
  );
};

export default Explore;
