import React, { useState } from "react";
import "./profile.css";
import { LeftSidebar, RightSidebar, CenterContent } from "./index";

const Profile = () => {
  const [isUsersModalOpen, setUsersModalOpen] = useState(false);
  return (
    <div className="app-container">
      <LeftSidebar />
      <CenterContent />
      <RightSidebar />
    </div>
  );
};

export default Profile;
