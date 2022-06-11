import React, { useEffect } from "react";
import {
  Post,
  useAppDispatch,
  useAppSelector,
  getSortedPosts,
  postsActions,
} from "./index";
import { Post as Posttype } from "./post/PostProps";

const Posts = () => {
  const { posts, sortBy } = useAppSelector((store) => store.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (posts.length > 0) {
      const sortedPosts = getSortedPosts(posts, sortBy);
      dispatch(postsActions.setPosts({ posts: sortedPosts }));
    }
  }, []);

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
