import React, { useState } from "react";
import {
  AiOutlineClose,
  Avatar,
  PrimaryButton,
  useAppDispatch,
  useAppSelector,
  showToast,
  editUser,
  authActions,
} from "./index";

import { EditProfileModalProps } from "./EditProfileModalProps";
import "./editprofilemodal.css";

type FormDetailsType = {
  firstName: string;
  lastName: string;
  bio: string;
  website: string;
  isUpdateProfileDisable: boolean;
};

const EditProfileModal = (props: EditProfileModalProps) => {
  const { setEditProfileModalOpen, setUserDetails } = props;
  //TODO change any
  const { user }: any = useAppSelector((store) => store.auth);
  const firstName = user.firstName;
  const lastName = user.lastName;
  const bio = user.bio;
  const website = user.website;
  const [formDetails, setFormDetails] = useState<FormDetailsType>({
    firstName: firstName,
    lastName: lastName,
    bio: bio,
    website: website,
    isUpdateProfileDisable: true,
  });
  const dispatch = useAppDispatch();

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const closeModal = () => {
    setEditProfileModalOpen(false);
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({
      ...formDetails,
      [e.target.id]: e.target.value,
      isUpdateProfileDisable: false,
    });
  };
  // TODO any
  const handleUpdateProfileClick = async (e: any) => {
    e.preventDefault();
    const { data, success, message } = await editUser(formDetails);

    if (success) {
      dispatch(authActions.setUser({ user: data, isUserLoggedInStatus: true }));
      setUserDetails({
        userId: data.userId,
        userName: `${data.firstName} ${data.lastName}`,
        userBio: data.bio,
        followers: data.followers,
        following: data.following,
      });

      showToast("SUCCESS", "Profile Updated Successfully");
      setEditProfileModalOpen(false);
    } else {
      showToast("ERROR", message);
    }
  };

  return (
    <div className="edit-profile-modal" onClick={closeModal}>
      <div className="edit-profile-modal-container" onClick={stopPropagation}>
        <AiOutlineClose
          className="edit-profile-modal-close-icon"
          onClick={closeModal}
        />
        <header className="edit-profile-modal-header">
          <div className="edit-profile-modal-content">
            <h3 className="font-medium-large">Edit Profile</h3>
            <p className="font-small">Ankur@9669</p>
          </div>
          <div className="edit-profile-avatar-container">
            <img
              src={Avatar}
              className="img-responsive img-round"
              alt="user-avatar"
            />
          </div>
        </header>

        <form className="edit-profile-form">
          <div className="edit-profile-input-container">
            <label htmlFor="firstName" className="edit-profile-modal-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              className="edit-profile-modal-input"
              value={formDetails.firstName}
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="edit-profile-input-container">
            <label htmlFor="lastName" className="edit-profile-modal-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              className="edit-profile-modal-input"
              value={formDetails.lastName}
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="edit-profile-input-container">
            <label htmlFor="bio" className="edit-profile-modal-label">
              Bio
            </label>
            <input
              type="text"
              id="bio"
              className="edit-profile-modal-input"
              value={formDetails.bio}
              placeholder="Bio"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <div className="edit-profile-input-container">
            <label htmlFor="website" className="edit-profile-modal-label">
              Website
            </label>
            <input
              type="text"
              id="website"
              className="edit-profile-modal-input"
              value={formDetails.website}
              placeholder="Website"
              onChange={(e) => handleFormChange(e)}
            />
          </div>

          <PrimaryButton
            buttonText="Update Profile"
            className="update-profile-button"
            isDisabled={formDetails.isUpdateProfileDisable}
            onClick={handleUpdateProfileClick}
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
