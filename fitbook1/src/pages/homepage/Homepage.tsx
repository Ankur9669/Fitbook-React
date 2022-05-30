import {
  LeftSideBar,
  RightSidebar,
  CenterContent,
  MobileFooter,
  CreatePostModal,
  FloatingButton,
} from "./index";
import { useState } from "react";

const Homepage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && <CreatePostModal setModalOpen={setModalOpen} />}
      <LeftSideBar setModalOpen={setModalOpen} />
      <CenterContent />
      <RightSidebar />
      <MobileFooter />
      <FloatingButton setModalOpen={setModalOpen} />
    </>
  );
};

export default Homepage;
