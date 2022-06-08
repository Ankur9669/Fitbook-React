import React, { useState } from "react";
import {
  LeftSidebar,
  RightSidebar,
  CreatePostModal,
  CenterContent,
} from "./index";

const Explore = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="app-container">
      {isModalOpen && <CreatePostModal setModalOpen={setModalOpen} />}
      <LeftSidebar setModalOpen={setModalOpen} />
      <CenterContent />
      <RightSidebar />
    </div>
  );
};

export default Explore;
