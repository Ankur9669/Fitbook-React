import React, { useState } from "react";
import { AiOutlineClose, Avatar, PrimaryButton } from "./index";
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
  const { setEditProfileModalOpen } = props;
  const [formDetails, setFormDetails] = useState<FormDetailsType>({
    firstName: "",
    lastName: "",
    bio: "",
    website: "",
    isUpdateProfileDisable: true,
  });

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
  const handleUpdateProfileClick = async () => {};

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
            <img src={Avatar} className="img-responsive img-round" />
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
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
