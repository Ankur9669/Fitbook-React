import React, { useEffect } from "react";
import User from "./user/User";
import { AiOutlineClose } from "../../../../assets/icons/icons";
import { useAppSelector } from "../../../../app/hooks";
import { UserModalProps } from "./UserModalProps";
import "./usermodal.css";

const UserModal = (props: UserModalProps) => {
  const { setModalOpen, userModalHeading } = props;
  // TODO change any
  const { user }: any = useAppSelector((store) => store.auth);
  const userFollowers: any[] = user.followers;
  const userFollowing: any[] = user.following;

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
        <h1 className="user-modal-heading font-large">{userModalHeading}</h1>
        <div className="users-container">
          {userModalHeading === "Followers"
            ? userFollowers.map((user) => (
                <div key={user._id}>
                  <User
                    userName={`${user.firstName} ${user.lastName}`}
                    userId={user.userID}
                  />
                </div>
              ))
            : userFollowing.map((user) => (
                <div key={user._id}>
                  <User
                    userName={`${user.firstName} ${user.lastName}`}
                    userId={user.userId}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
