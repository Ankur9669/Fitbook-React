import React, { useEffect } from "react";
import {
  PrimaryButton,
  CgTrending,
  IoPersonAddSharp,
  useAppDispatch,
  useAppSelector,
  postsActions,
  getSortedPosts,
} from "./index";
import "./sort.css";

const Sort = () => {
  const dispatch = useAppDispatch();
  const { posts, sortBy } = useAppSelector((store) => store.posts);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue === "oldest") {
      dispatch(postsActions.setSortBy({ sortBy: "OLDEST" }));
    } else {
      dispatch(postsActions.setSortBy({ sortBy: "LATEST" }));
    }
  };
  const handleTrendingClick = () => {
    dispatch(postsActions.setSortBy({ sortBy: "TRENDING" }));
  };

  useEffect(() => {
    const sortedPosts = getSortedPosts(posts, sortBy);
    dispatch(postsActions.setPosts({ posts: sortedPosts }));
  }, [sortBy]);
  return (
    <div>
      <h3 className="right-sidebar-heading">Sort By</h3>
      <div className="right-sidebar-content sort-content">
        <PrimaryButton
          buttonText="what's trending"
          iconLeft={CgTrending}
          onClick={handleTrendingClick}
        />
        <select className="filter-posts" onChange={handleChange}>
          <option value="oldest">Oldest First</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
