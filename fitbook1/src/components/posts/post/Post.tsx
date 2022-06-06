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

const Post = (props: PostProps) => {
  const { userName, postContent, postComments, postLikes } = props;
  const [isPostModalOpen, setPostModalOpen] = useState(false);

  const handleMoreClickIcon = () => {
    setPostModalOpen((isPostModalOpen) => !isPostModalOpen);
  };
  return (
    <div className="post">
      <div className="post-avatar-content-container">
        <div className="post-avatar-container">
          <img
            src={Avatar}
            alt="user-avatar"
            className="img-responsive img-round"
          />
        </div>

        <div className="post-content-container">
          <h3 className="post-header">{userName}</h3>
          <p className="post-content">{postContent}</p>
          <FiMoreHorizontal
            className="post-more-icon"
            onClick={handleMoreClickIcon}
          />
          {isPostModalOpen && <PostModal setPostModalOpen={setPostModalOpen} />}
        </div>
      </div>
      <div className="post-buttons-container">
        <div className="post-button-container">
          <AiFillHeart className="post-icons post-button" />
          <p className="post-button-text font-medium">{postLikes}</p>
        </div>
        <div className="post-button-container">
          <BiCommentDetail className="post-icons post-button" />
          <p className="post-button-text font-medium">{postComments}</p>
        </div>
        <div className="post-button-container">
          <BsBookmark className="post-icons post-button" />
        </div>
      </div>
    </div>
  );
};

export default Post;
