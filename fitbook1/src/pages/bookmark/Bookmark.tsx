import React, { useEffect } from "react";
import { LeftSidebar, CenterContent, RightSidebar } from "./index";
import { loadPosts } from "../../app/features/posts/postSlice";
import { useAppDispatch } from "../../app/hooks";
import "./bookmark.css";

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
    </div>
  );
};

export default Bookmark;
