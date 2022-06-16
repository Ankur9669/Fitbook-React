import React, { useState, useEffect } from "react";
import "./singlepost.css";
import {
  PrimaryButton,
  IoChevronBack,
  AiFillHeart,
  BiCommentDetail,
  BsBookmark,
  BsBookmarkFill,
  FiMoreHorizontal,
  FaUserCircle,
  Avatar,
  Comment,
  useNavigate,
  useParams,
  getSinglePost,
  showToast,
  addComment,
  useAppSelector,
  findLiked,
  findBookMarked,
  addToBookmark,
  removeFromBookmark,
  useAppDispatch,
  authActions,
  addPostLike,
  removePostLike,
} from "./index";
import { CommentType } from "../../../util/types/CommentType";

const Singlepost = () => {
  const wordsCount = 250;
  const [replyText, setReplyText] = useState<string>("");
  const [remainingWords, setRemainingWords] = useState<number>(wordsCount);
  // TODO change any type
  const [post, setPost] = useState<any>({});
  const [postComments, setPostComments] = useState<[] | undefined>(
    post?.comments
  );
  const [isLikedPost, setLikedPost] = useState<boolean>(false);
  const [isPostBookMarked, setPostBookMarked] = useState<boolean>(false);
  // TODO change any type
  const { user }: any = useAppSelector((store) => store.auth);
  const { postId } = useParams();
  const userName = `${user.firstName} ${user.lastName}`;
  const userEmail = user.email;
  const likeCount = post?.likes?.likeCount;
  const commentCount = post?.comments?.length;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onReplyTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
    setRemainingWords(wordsCount - e.target.value.length);
  };
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  const handleReplyClick = async () => {
    if (postId !== undefined) {
      const { data, success, message } = await addComment(
        postId,
        replyText,
        userName
      );

      if (success) {
        setPostComments(data);
        showToast("SUCCESS", "Comment Added Successflly");
        setRemainingWords(wordsCount);
      } else {
        showToast("ERROR", message);
      }
    }
  };
  const handleBookmarkIconClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isPostBookMarked && postId != undefined) {
      const { data, success, message } = await addToBookmark(postId);

      if (success) {
        dispatch(authActions.setBookmarks({ bookmarks: data }));
        setPostBookMarked(findBookMarked(postId, data));
        showToast("SUCCESS", "Post Bookmarked Successfully");
      } else {
        showToast("ERROR", message);
      }
    } else if (postId != undefined) {
      const { data, success, message } = await removeFromBookmark(postId);

      if (success) {
        dispatch(authActions.setBookmarks({ bookmarks: data }));
        setPostBookMarked(findBookMarked(postId, data));
        showToast("SUCCESS", "Post Removed From Bookmarked Successfully");
      } else {
        showToast("ERROR", message);
      }
    }
  };
  const handleLikeIconClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isLikedPost && postId != undefined) {
      const { data: posts, success, message } = await addPostLike(postId);
      if (success) {
        fetchSinglePost();
        showToast("SUCCESS", "Post Liked Successfully");
      } else {
        showToast("ERROR", message);
      }
    } else if (postId != undefined) {
      const { data, success, message } = await removePostLike(postId);

      if (success) {
        fetchSinglePost();
        showToast("SUCCESS", "Post UnLiked Successfully");
      } else {
        showToast("ERROR", message);
      }
    }
  };
  const fetchSinglePost = async () => {
    if (postId != undefined) {
      const { data, success, message } = await getSinglePost(postId);
      if (success) {
        setPost(data);
        setPostComments(data?.comments);
        setLikedPost(findLiked(userEmail, data?.likes.likedBy));
        setPostBookMarked(findBookMarked(postId, user?.bookmarks));
      }
    }
  };

  useEffect(() => {
    (async () => {
      if (postId != undefined) {
        const { data, success, message } = await getSinglePost(postId);
        if (success) {
          setPost(data);
          setPostComments(data?.comments);
          setLikedPost(findLiked(userEmail, data?.likes.likedBy));
          setPostBookMarked(findBookMarked(postId, user?.bookmarks));
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
            <AiFillHeart
              className={`single-post-icons single-post-button ${
                isLikedPost ? "single-post-liked" : "single-post-unliked"
              }`}
              onClick={handleLikeIconClick}
            />
            <p className="single-post-button-text font-medium">{likeCount}</p>
          </div>
          <div className="single-post-button-container">
            <BiCommentDetail className="single-post-icons single-post-button" />
            <p className="single-post-button-text font-medium">
              {commentCount}
            </p>
          </div>
          <div className="single-post-button-container">
            <BsBookmarkFill
              className={`single-post-icons single-post-button ${
                isPostBookMarked
                  ? "single-post-bookmarked"
                  : "single-post-unbookmarked"
              }`}
              onClick={handleBookmarkIconClick}
            />
          </div>
        </div>

        <div className="single-post-reply-box-container">
          <div className="single-post-avatar-reply-box-container">
            <FaUserCircle className="single-post-avatar" />
            <input
              placeholder="Enter your reply"
              className="single-post-reply font-medium"
              value={replyText}
              onChange={onReplyTextChange}
            />
          </div>
        </div>
        <div className="single-post-reply-button-container">
          <p className="single-post-words-count font-medium">
            {remainingWords}
          </p>
          <PrimaryButton buttonText="Reply" onClick={handleReplyClick} />
        </div>

        {postComments?.map((comment: CommentType) => {
          return (
            <Comment
              key={comment._id}
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
