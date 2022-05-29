import MobileFooter from "../../components/mobile-footer/MobileFooter";
import CreatePostModal from "./createpostmodal/CreatePostModal";
import FloatingButton from "./floatingbutton/FloatingButton";
import { LeftSideBar, RightSidebar, CenterContent } from "./index";
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
