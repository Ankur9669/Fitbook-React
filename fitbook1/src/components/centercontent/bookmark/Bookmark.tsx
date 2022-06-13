import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { Post } from "../../posts";
import { Post as Posttype } from "../../../components/posts/post/PostProps";
import "./bookmark.css";

const Bookmark = () => {
  const { user }: any = useAppSelector((store) => store.auth);
  const bookmarks = user.bookmarks;

  return (
    <div className="empty-bookmark-container">
      {bookmarks.length === 0 ? (
        <h1 className="empty-bookmark-text font-large">
          You don't have any posts bookmarked
        </h1>
      ) : (
        <div>
          {bookmarks.map((post: Posttype) => (
            <div key={post._id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
