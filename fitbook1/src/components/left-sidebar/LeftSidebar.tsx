import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import {
  AiFillHome,
  CgProfile,
  BsFillBookmarkFill,
  MdExplore,
  NavLink,
  useAppSelector,
} from "./index";
import { LeftSidebarProps } from "./LeftSidebarProps";
import "./left-sidebar.css";

const LeftSidebar = (props: LeftSidebarProps) => {
  const { setModalOpen } = props;
  const { user, isUserLoggedIn } = useAppSelector((store) => store.auth);
  const userEmail = user.email;
  const handleCreatePostClick = () => {
    setModalOpen(true);
  };
  const findActive = ({ isActive }: any) => {
    return isActive && "active";
  };

  return (
    <div className="left-sidebar-container">
      <div className="left-sidebar">
        <div className="left-sidebar-icons">
          <NavLink to="/" className={`sidebar-icon ${findActive}`}>
            <AiFillHome className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Home</h1>
          </NavLink>

          <NavLink to="/explore" className={`sidebar-icon ${findActive}`}>
            <MdExplore className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Explore</h1>
          </NavLink>

          <NavLink to="/bookmarks" className={`sidebar-icon ${findActive}`}>
            <BsFillBookmarkFill className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Bookmark</h1>
          </NavLink>

          <NavLink
            to={`/profile/${userEmail}`}
            className={`sidebar-icon ${findActive}`}
          >
            <CgProfile className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Profile</h1>
          </NavLink>

          {/* <NavLink to="/messages" className={`sidebar-icon ${findActive}`}>
            <RiMessage2Fill className="sidebar-icon-icon" />
            <h1 className="sidebar-icon-text">Messages</h1>
          </NavLink> */}
        </div>
        <div className="left-sidebar-footer">
          <PrimaryButton
            buttonText="Create New Post"
            onClick={handleCreatePostClick}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
