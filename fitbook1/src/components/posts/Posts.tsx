import React from "react";
import Post from "./post/Post";

const Posts = () => {
  return (
    <div className="posts-container">
      <Post
        userName="Ankur Gupta"
        postComments="20"
        postLikes="15"
        postContent="You should never give up on your dreams"
      />
      <Post
        userName="Ankur Gupta"
        postComments="20"
        postLikes="15"
        postContent="You should never give up on your dreams You should never give up on your dreams"
      />
      <Post
        userName="Ankur Gupta"
        postComments="20"
        postLikes="15"
        postContent="You should never give up on your dreams You should never give up on your dreams You should never give up on your dreams"
      />
      <Post
        userName="Ankur Gupta"
        postComments="20"
        postLikes="15"
        postContent="You should never give up on your dreams You should never give up on your dreams You should never give up on your dreams You should never give up on your dreams"
      />
    </div>
  );
};

export default Posts;
