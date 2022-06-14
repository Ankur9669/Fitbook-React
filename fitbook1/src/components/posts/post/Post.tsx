import React, { useState, useEffect } from "react";
import "./post.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  BiCommentDetail,
  BsBookmark,
  BsBookmarkFill,
  FiMoreHorizontal,
  Avatar,
  PostModal,
  useNavigate,
  useAppSelector,
  findLiked,
  addPostLike,
  useAppDispatch,
  postsActions,
  showToast,
  removePostLike,
  removeFromBookmark,
  addToBookmark,
  findBookMarked,
  authActions,
} from "./index";
import { PostProps } from "./PostProps";
import { getSortedPosts } from "../../../util/getSortedPosts";

const Post = (props: PostProps) => {
  const { post } = props;
  const {
    email: postEmail,
    postContent,
    likes,
    createdAt,
    updatedAt,
    comments,
    _id,
    username,
  } = post;
  const [isPostModalOpen, setPostModalOpen] = useState(false);

  // TODO change any type
  const { user }: any = useAppSelector((store) => store.auth);
  const { sortBy }: any = useAppSelector((store) => store.posts);
  const userEmail = user.email;
  const userBookmarks = user.bookmarks;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let isLikedPost = findLiked(userEmail, likes.likedBy);
  let isPostBookMarked = findBookMarked(_id, userBookmarks);

  const handleMoreClickIcon = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPostModalOpen((isPostModalOpen) => !isPostModalOpen);
  };

  const handleLikeIconClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLikedPost) {
      const { data, success, message } = await addPostLike(_id);

      if (success) {
        const sortedPosts = getSortedPosts(data, sortBy);
        dispatch(postsActions.setPosts({ posts: sortedPosts }));
        showToast("SUCCESS", "Post Liked Successfully");
      } else {
        showToast("ERROR", message);
      }
    } else {
      const { data, success, message } = await removePostLike(_id);

      if (success) {
        const sortedPosts = getSortedPosts(data, sortBy);
        dispatch(postsActions.setPosts({ posts: sortedPosts }));
        // dispatch(postsActions.setPosts({ posts: data }));
        showToast("SUCCESS", "Post UnLiked Successfully");
      } else {
        showToast("ERROR", message);
      }
    }
  };

  const handleCommentIconClick = (e: React.MouseEvent) => {
    // e.stopPropagation();
  };

  const handleBookmarkIconClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isPostBookMarked) {
      const { data, success, message } = await addToBookmark(_id);

      if (success) {
        dispatch(authActions.setBookmarks({ bookmarks: data }));
        showToast("SUCCESS", "Post Bookmarked Successfully");
      } else {
        showToast("ERROR", message);
      }
    } else {
      const { data, success, message } = await removeFromBookmark(_id);

      if (success) {
        dispatch(authActions.setBookmarks({ bookmarks: data }));
        showToast("SUCCESS", "Post Removed From Bookmarked Successfully");
      } else {
        showToast("ERROR", message);
      }
    }
  };
  const handlePostClick = () => {
    navigate(`/post/${_id}`);
  };

  return (
    <div className="post" onClick={handlePostClick}>
      <div className="post-avatar-content-container">
        <div className="post-avatar-container">
          <img
            src={Avatar}
            alt="user-avatar"
            className="img-responsive img-round"
          />
        </div>

        <div className="post-content-container">
          <h3 className="post-header">{username}</h3>
          <p className="post-content">{postContent}</p>
          {postEmail === userEmail && (
            <FiMoreHorizontal
              className="post-more-icon"
              onClick={handleMoreClickIcon}
            />
          )}

          {isPostModalOpen && (
            <PostModal
              setPostModalOpen={setPostModalOpen}
              postContent={postContent}
              postId={_id}
            />
          )}
        </div>
      </div>
      <div className="post-buttons-container">
        <div className="post-button-container">
          <AiFillHeart
            className={`post-icons post-button ${
              isLikedPost ? "post-liked" : "post-unliked"
            }`}
            onClick={handleLikeIconClick}
          />
          <p className="post-button-text font-medium">{likes.likeCount}</p>
        </div>
        <div className="post-button-container">
          <BiCommentDetail
            className="post-icons post-button"
            onClick={handleCommentIconClick}
          />
          <p className="post-button-text font-medium">{comments.length}</p>
        </div>
        <div className="post-button-container">
          <BsBookmarkFill
            className={`post-icons post-button ${
              isPostBookMarked ? "post-bookmarked" : "post-unbookmarked"
            }`}
            onClick={handleBookmarkIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
