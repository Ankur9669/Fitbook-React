import React from "react";
import "./mobile-footer.css";
import {
  AiFillHome,
  MdExplore,
  BsFillBookmarkFill,
  CgProfile,
  RiMessage2Fill,
} from "../../assets/icons/icons";

const MobileFooter = () => {
  return (
    <div className="mobile-footer">
      <div className="mobile-footer-item mobile-footer-active">
        <AiFillHome className="footer-icon" />
        <p className="font-medium">Home</p>
      </div>
      <div className="mobile-footer-item">
        <MdExplore className="footer-icon" />
        <p className="font-medium">Explore</p>
      </div>
      <div className="mobile-footer-item">
        <RiMessage2Fill className="footer-icon" />
        <p className="font-medium">Messages</p>
      </div>
      <div className="mobile-footer-item">
        <BsFillBookmarkFill className="footer-icon" />
        <p className="font-medium">Bookmarks</p>
      </div>
      <div className="mobile-footer-item">
        <CgProfile className="footer-icon" />
        <p className="font-medium">Profile</p>
      </div>
    </div>
  );
};

export default MobileFooter;
