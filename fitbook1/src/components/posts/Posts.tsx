import React from "react";
import Post from "./post/Post";
import { useAppSelector } from "../../app/hooks";

const Posts = () => {
  const { posts, loading, error } = useAppSelector((store) => store.posts);
  console.log(posts);
  return (
    <div className="posts-container">
      {posts.map((post: any) => (
        <Post
          userName="Ankur Gupta"
          postComments="20"
          postLikes="15"
          postContent={post.content}
        />
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
