import React from "react";
import LeftSideBar from "../../components/left-sidebar/LeftSidebar";
import CenterContent from "../../components/centercontent/CenterContent";
import RightSidebar from "../../components/right-sidebar/RightSidebar";
import MobileFooter from "../../components/mobile-footer/MobileFooter";

const SinglePost = () => {
  return (
    <div className="app-container">
      <LeftSideBar />
      <CenterContent />
      <RightSidebar />
      <MobileFooter />
    </div>
  );
};

export default SinglePost;
