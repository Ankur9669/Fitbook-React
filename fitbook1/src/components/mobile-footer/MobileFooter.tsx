import React from "react";
import "./mobile-footer.css";
import {
  AiFillHome,
  MdExplore,
  BsFillBookmarkFill,
  CgProfile,
  RiMessage2Fill,
} from "../../assets/icons/icons";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const MobileFooter = () => {
  const { user } = useAppSelector((store) => store.auth);
  const userEmail = user.email;
  const findActive = ({ isActive }: any) => {
    return isActive && "active";
  };

  return (
    <div className="mobile-footer">
      <NavLink to="/" className={`mobile-footer-item ${findActive}`}>
        <AiFillHome className="footer-icon" />
        <p className="font-medium">Home</p>
      </NavLink>
      <NavLink to="/explore" className={`mobile-footer-item ${findActive}`}>
        <MdExplore className="footer-icon" />
        <p className="font-medium">Explore</p>
      </NavLink>
      <NavLink to="/messages" className={`mobile-footer-item ${findActive}`}>
        <RiMessage2Fill className="footer-icon" />
        <p className="font-medium">Messages</p>
      </NavLink>
      <NavLink to="/bookmarks" className={`mobile-footer-item ${findActive}`}>
        <BsFillBookmarkFill className="footer-icon" />
        <p className="font-medium">Bookmarks</p>
      </NavLink>
      <NavLink
        to={`/profile/${userEmail}`}
        className={`mobile-footer-item ${findActive}`}
      >
        <CgProfile className="footer-icon" />
        <p className="font-medium">Profile</p>
      </NavLink>
    </div>
  );
};

export default MobileFooter;
