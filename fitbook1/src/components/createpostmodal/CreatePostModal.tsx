import React, { useEffect } from "react";
import CreatePost from "../../components/centercontent/createpost/CreatePost";
import "./create-post-modal.css";
import { CreatePostModalProps } from "./CreatePostModalProps";

const CreatePostModal = (props: CreatePostModalProps) => {
  const { setModalOpen } = props;
  useEffect(() => {
    // Functionality to disable the scroll of background
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleModalBackgroundClick = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal-background" onClick={handleModalBackgroundClick}>
      <div className="create-post-modal">
        <CreatePost setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

export default CreatePostModal;
