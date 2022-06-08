import React, { useEffect } from "react";
import User from "./user/User";
import "./usermodal.css";
import { AiOutlineClose } from "../../../../assets/icons/icons";
import { UserModalProps } from "./UserModalProps";

const UserModal = (props: UserModalProps) => {
  const { setModalOpen } = props;
  useEffect(() => {
    // Functionality to disable the scroll of background
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="user-modal" onClick={closeModal}>
      <div className="user-modal-container" onClick={stopPropagation}>
        <AiOutlineClose
          className="user-modal-close-icon"
          onClick={closeModal}
        />
        <h1 className="user-modal-heading font-large">Following</h1>
        <div className="users-container">
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
};

export default UserModal;
