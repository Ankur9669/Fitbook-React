import React, { useState } from "react";
import LeftSidebar from "../../components/left-sidebar/LeftSidebar";
import RightSidebar from "../../components/right-sidebar/RightSidebar";
import CreatePostModal from "../../components/createpostmodal/CreatePostModal";
import CenterContent from "../../components/centercontent/CenterContent";

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
