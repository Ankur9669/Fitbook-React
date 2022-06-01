import React from "react";
import "./empty-bookmark.css";

const EmptyBookmark = () => {
  return (
    <div className="empty-bookmark-container">
      <h1 className="empty-bookmark-text font-large">
        You don't have any posts bookmarked
      </h1>
    </div>
  );
};

export default EmptyBookmark;
