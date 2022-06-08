import React from "react";
import { LeftSidebar, CenterContent, RightSidebar } from "./index";
import "./bookmark.css";

const Bookmark = () => {
  return (
    <div className="app-container">
      <LeftSidebar />
      <CenterContent />
      <RightSidebar />
    </div>
  );
};

export default Bookmark;
