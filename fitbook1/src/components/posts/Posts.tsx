import React from "react";
import Post from "./post/Post";
import { useAppSelector } from "../../app/hooks";
import { Post as Posttype } from "./post/PostProps";

const Posts = () => {
  const { posts, loading, error } = useAppSelector((store) => store.posts);

  return (
    <div className="posts-container">
      {posts.map((post: Posttype) => (
        <Post post={post} />
      ))}

      {/* <Post
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
      /> */}
    </div>
  );
};

export default Posts;
