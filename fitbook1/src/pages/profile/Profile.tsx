import React, { useState } from "react";
import "./profile.css";
import { LeftSidebar, RightSidebar, CenterContent } from "./index";

const Profile = () => {
  const [isUsersModalOpen, setUsersModalOpen] = useState(false);
  return (
    <>
      <LeftSidebar />
      <CenterContent />
      <RightSidebar />
    </>
  );
};

export default Profile;
