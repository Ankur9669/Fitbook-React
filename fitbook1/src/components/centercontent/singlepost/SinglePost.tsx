import React, { useState } from "react";
import "./singlepost.css";
import PrimaryButton from "../../buttons/PrimaryButton";
import {
  IoChevronBack,
  AiFillHeart,
  AiOutlineHeart,
  BiCommentDetail,
  BsBookmark,
  FiMoreHorizontal,
  FaUserCircle,
} from "../../../assets/icons/icons";
import Avatar from "../../../assets/images/avatar.svg";
import Comment from "./comment/Comment";
import { useNavigate } from "react-router";

const Singlepost = () => {
  const [replyText, setReplyText] = useState("");
  const navigate = useNavigate();

  const onReplyTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
  };
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <div className="single-post-container">
      <PrimaryButton
        buttonText="Go Back"
        iconLeft={IoChevronBack}
        onClick={handleBackButtonClick}
      />

      <div className="single-post">
        <div className="single-post-avatar-content-container">
          <div className="single-post-avatar-container">
            <img
              src={Avatar}
              alt="user-avatar"
              className="img-responsive img-round"
            />
          </div>

          <div className="single-post-content-container">
            <h3 className="single-post-header">Ankur Gupta</h3>
            <p className="single-post-content">
              asdddd asd aaaaaaa ssssssss aaaaaaaa ssssss
            </p>
            <p className="single-post-timeline font-extra-small">a month ago</p>
          </div>
        </div>
        <div className="single-post-buttons-container">
          <div className="single-post-button-container">
            <AiFillHeart className="single-post-icons single-post-button" />
            <p className="single-post-button-text font-medium">20</p>
          </div>
          <div className="single-post-button-container">
            <BiCommentDetail className="single-post-icons single-post-button" />
            <p className="single-post-button-text font-medium">10</p>
          </div>
          <div className="single-post-button-container">
            <BsBookmark className="single-post-icons single-post-button" />
          </div>
        </div>

        <div className="single-post-reply-box-container">
          <div className="single-post-avatar-reply-box-container">
            <FaUserCircle className="single-post-avatar" />
            <input
              placeholder="Enter your reply"
              className="single-post-reply"
              value={replyText}
              onChange={onReplyTextChange}
            />
          </div>
        </div>
        <div className="single-post-reply-button-container">
          <p className="single-post-words-count font-normal">250</p>
          <PrimaryButton buttonText="Reply" />
        </div>

        <Comment
          userName="Ankur Gupta"
          commentContent="You can do everything"
          commentTime="a month ago"
        />
        <Comment
          userName="Ankur Gupta"
          commentContent="You can do everything You can do everything"
          commentTime="a month ago"
        />
        <Comment
          userName="Ankur Gupta"
          commentContent="You can do everything You can do everything You can do everything"
          commentTime="a month ago"
        />
      </div>
    </div>
  );
};

export default Singlepost;
