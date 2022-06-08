import React from "react";
import { PostModalProps } from "./PostModalProps";
import { AiFillEdit, AiFillDelete } from "../../../../assets/icons/icons";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./postmodal.css";
import EditPostModal from "./editpostmodal/EditPostModal";

const PostModal = (props: PostModalProps) => {
  const { setPostModalOpen, postContent, postId } = props;
  const [isEditPostModalOpen, setEditPostModalOpen] = useState(false);
  const handleEditButtonClick = () => {
    setEditPostModalOpen(true);
  };
  return (
    <div className="post-modal">
      <button className="post-modal-button" onClick={handleEditButtonClick}>
        Edit
        <AiFillEdit className="post-modal-icon" />
      </button>
      <button className="post-modal-button">
        Delete
        <AiFillDelete />
      </button>

      {isEditPostModalOpen &&
        ReactDOM.createPortal(
          <EditPostModal
            setEditPostModalOpen={setEditPostModalOpen}
            postContent={postContent}
            postId={postId}
          />,
          document.getElementById("modal")!
        )}
    </div>
  );
};

export default PostModal;
