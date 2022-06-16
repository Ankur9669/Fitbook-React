import React, { useEffect } from "react";
import { LeftSidebar, CenterContent, RightSidebar } from "./index";
import { loadPosts } from "../../app/features/posts/postSlice";
import { useAppDispatch } from "../../app/hooks";
import "./bookmark.css";
import MobileFooter from "../../components/mobile-footer/MobileFooter";

const Bookmark = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <div className="app-container">
      <LeftSidebar />
      <CenterContent />
      <RightSidebar />
      <MobileFooter />
    </div>
  );
};

export default Bookmark;
