import React from "react";
import "./messages.css";
import {
  LeftSideBar,
  RightSidebar,
  CenterContent,
  MobileFooter,
  CreatePostModal,
  FloatingButton,
  useState,
  useAppDispatch,
  useAppSelector,
  useEffect,
  useDocumentTitle,
} from "./index";

const Messages = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

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

export default Messages;
