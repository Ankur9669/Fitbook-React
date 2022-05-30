import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import {
  AiFillHome,
  CgProfile,
  BsFillBookmarkFill,
  MdExplore,
  RiMessage2Fill,
} from "./index";
import "./left-sidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar-container">
      <div className="left-sidebar">
        <div className="left-sidebar-icons">
          <div className="sidebar-icon active">
            <AiFillHome className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Home</h1>
          </div>
          <div className="sidebar-icon">
            <MdExplore className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Explore</h1>
          </div>
          <div className="sidebar-icon">
            <BsFillBookmarkFill className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Bookmarks</h1>
          </div>
          <div className="sidebar-icon">
            <CgProfile className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Profile</h1>
          </div>
          <div className="sidebar-icon">
            <RiMessage2Fill className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Messages</h1>
          </div>
        </div>
        <div className="left-sidebar-footer">
          <PrimaryButton buttonText="Create New Post" />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
