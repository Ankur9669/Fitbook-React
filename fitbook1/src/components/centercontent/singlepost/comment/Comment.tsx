import React from "react";
import "./comment.css";
import Avatar from "../../../../assets/images/avatar.svg";
import { CommentProps } from "./CommenProps";

const Comment = (props: CommentProps) => {
  const { userName, commentContent, commentTime } = props;
  return (
    <div className="comment-container">
      <div className="comment-avatar-content-container">
        <div className="comment-avatar-container">
          <img
            src={Avatar}
            alt="user-avatar"
            className="img-responsive img-round"
          />
        </div>

        <div className="comment-content-container">
          <h3 className="comment-header">{userName}</h3>
          <p className="comment-content font-normal">{commentContent}</p>
          <p className="comment-timeline font-extra-small">{commentTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
