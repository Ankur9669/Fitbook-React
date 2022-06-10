import React, { useState, useEffect } from "react";
import "./singlepost.css";
import {
  PrimaryButton,
  IoChevronBack,
  AiFillHeart,
  BiCommentDetail,
  BsBookmark,
  FiMoreHorizontal,
  FaUserCircle,
  Avatar,
  Comment,
  useNavigate,
  useParams,
} from "./index";
import { getSinglePost } from "../../../util/api/getSinglePost";
import { showToast } from "../../../util/toasts/showToast";
import { Posttype } from "../../../app/features/posts/Posttype";
import { CommentType } from "../../../util/types/CommentType";

const Singlepost = () => {
  const wordsCount = 250;
  const [replyText, setReplyText] = useState<string>("");
  const [remainingWords, setRemainingWords] = useState<number>(wordsCount);
  // TODO change any type
  const [post, setPost] = useState<any>({});

  const navigate = useNavigate();

  const onReplyTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
    setRemainingWords(wordsCount - e.target.value.length);
  };
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  const { postId } = useParams();

  useEffect(() => {
    (async () => {
      if (postId != undefined) {
        const { data, success, message } = await getSinglePost(postId);
        if (success) {
          console.log(data);
          setPost(data);
        } else {
          showToast("ERROR", message);
        }
      }
    })();
  }, []);

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
            <h3 className="single-post-header">{post?.username}</h3>
            <p className="single-post-content">{post?.postContent}</p>
            <p className="single-post-timeline font-extra-small">a month ago</p>
          </div>
        </div>
        <div className="single-post-buttons-container">
          <div className="single-post-button-container">
            <AiFillHeart className="single-post-icons single-post-button" />
            <p className="single-post-button-text font-medium">
              {post?.likes?.likeCount}
            </p>
          </div>
          <div className="single-post-button-container">
            <BiCommentDetail className="single-post-icons single-post-button" />
            <p className="single-post-button-text font-medium">
              {post?.comments?.length}
            </p>
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
          <p className="single-post-words-count font-normal">
            {remainingWords}
          </p>
          <PrimaryButton buttonText="Reply" />
        </div>

        {post?.comments?.map((comment: CommentType) => {
          return (
            <Comment
              userName={comment.username}
              commentContent={comment.text}
              commentTime="a month ago"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Singlepost;
