import React, { useState } from "react";
import "./post.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  BiCommentDetail,
  BsBookmark,
  FiMoreHorizontal,
  Avatar,
  PostModal,
} from "./index";
import { PostProps } from "./PostProps";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { findLiked } from "../../../util/findLiked";
import { addPostLike } from "../../../util/api/addPostLike";
import { useAppDispatch } from "../../centercontent/createpost";
import { postsActions } from "../../centercontent/createpost";
import { showToast } from "../../centercontent/createpost";

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
  const userEmail = user.email;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLikedPost = findLiked(userEmail, likes.likedBy);

  const handleMoreClickIcon = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPostModalOpen((isPostModalOpen) => !isPostModalOpen);
  };

  const handleLikeIconClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLikedPost) {
      const { data, success, message } = await addPostLike(_id);

      if (success) {
        dispatch(postsActions.setPosts({ posts: data }));
        showToast("SUCCESS", "Post Liked Successfully");
      } else {
        showToast("ERROR", message);
      }
    }
  };

  const handleCommentIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBookmarkIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const handlePostClick = () => {
    navigate(`/post/${_id}`);
  };
  // console.log(post);

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
          {postEmail !== userEmail && (
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
            className={`post-icons post-button ${isLikedPost && "post-liked"}`}
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
          <BsBookmark
            className="post-icons post-button"
            onClick={handleBookmarkIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
