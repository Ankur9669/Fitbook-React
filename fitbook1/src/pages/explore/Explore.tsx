import React, { useState } from "react";
import LeftSidebar from "../../components/left-sidebar/LeftSidebar";
import RightSidebar from "../../components/right-sidebar/RightSidebar";
import CreatePostModal from "../../components/createpostmodal/CreatePostModal";

const Explore = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && <CreatePostModal setModalOpen={setModalOpen} />}
      <LeftSidebar setModalOpen={setModalOpen} />
      <div></div>
      <RightSidebar />
    </>
  );
};

export default Explore;
