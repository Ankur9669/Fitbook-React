import React from "react";
import { PostModalProps } from "./PostModalProps";
import { AiFillEdit, AiFillDelete } from "../../../../assets/icons/icons";
import "./postmodal.css";

const PostModal = (props: PostModalProps) => {
  const { setPostModalOpen } = props;
  return (
    <div className="post-modal">
      <button className="post-modal-button">
        Edit
        <AiFillEdit className="post-modal-icon" />
      </button>
      <button className="post-modal-button">
        Delete
        <AiFillDelete />
      </button>
    </div>
  );
};

export default PostModal;
