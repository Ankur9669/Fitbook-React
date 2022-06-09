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

  const handleMoreClickIcon = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPostModalOpen((isPostModalOpen) => !isPostModalOpen);
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
          <AiFillHeart className="post-icons post-button" />
          <p className="post-button-text font-medium">{likes.likeCount}</p>
        </div>
        <div className="post-button-container">
          <BiCommentDetail className="post-icons post-button" />
          <p className="post-button-text font-medium">{comments.length}</p>
        </div>
        <div className="post-button-container">
          <BsBookmark className="post-icons post-button" />
        </div>
      </div>
    </div>
  );
};

export default Post;
