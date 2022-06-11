import React, { useEffect } from "react";
import Post from "./post/Post";
import { useAppSelector } from "../../app/hooks";
import { Post as Posttype } from "./post/PostProps";

const Posts = () => {
  const { posts, loading, error } = useAppSelector((store) => store.posts);

  return (
    <div className="posts-container">
      {posts.map((post: Posttype) => (
        <div key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
