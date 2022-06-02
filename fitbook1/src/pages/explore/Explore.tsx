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
    <>
      {isModalOpen && <CreatePostModal setModalOpen={setModalOpen} />}
      <LeftSidebar setModalOpen={setModalOpen} />
      <CenterContent />
      <RightSidebar />
    </>
  );
};

export default Explore;
