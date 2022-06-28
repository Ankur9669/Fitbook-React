import React from "react";
import "./comment.css";
import Avatar from "../../../../assets/images/avatar.svg";
import { CommentProps } from "./CommenProps";

const Comment = (props: CommentProps) => {
  const { userName, commentContent, commentTime } = props;

  let currentTime: Date = new Date();
  let commentDate: Date = new Date(commentTime);
  let differnceInTime = currentTime.getTime() - commentDate.getTime();
  let differenceInDays = differnceInTime / (1000 * 3600 * 24);
  let timeToShow: string = "";

  if (differenceInDays < 1) {
    timeToShow = "just now";
  } else if (differenceInDays < 30) {
    timeToShow = `${differenceInDays} days ago`;
  } else if (differenceInDays > 30) {
    timeToShow = "a month ago";
  } else if (differenceInDays > 365) {
    timeToShow = "a year ago";
  }

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
          <p className="comment-timeline font-extra-small">{timeToShow}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
