import React from "react";
import "./createpost.css";
import {
  Avatar,
  FaSmile,
  PrimaryButton,
  useState,
  Picker,
  createPost,
  useAppDispatch,
  useAppSelector,
  postsActions,
  showToast,
} from "./index";
import { CreatePostProps } from "./CreatePostProps";

const CreatePost = (props: CreatePostProps) => {
  const wordsLimit = 250;
  const [remainingWords, setRemainingWords] = useState(wordsLimit);
  const [isPostDisable, setPostDisabled] = useState(true);
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const { setModalOpen } = props;

  // TODO change any type
  const { user }: any = useAppSelector((store) => store.auth);
  const userEmail = user.email;
  const firstName = user.firstName;
  const lastName = user.lastName;
  const userName = `${firstName} ${lastName}`;
  const dispatch = useAppDispatch();

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let currentText = e.target.value;
    setPostText(currentText);
    setRemainingWords(wordsLimit - currentText.length);
    if (currentText.length > 250 || currentText.length === 0) {
      setPostDisabled(true);
    } else {
      setPostDisabled(false);
    }
  };

  // TODO change any type
  const onEmojiClick = (event: React.MouseEvent, emojiObject: any) => {
    setPostText((postText) => postText + emojiObject.emoji);
  };

  const handleCreatePostClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { data, success, message } = await createPost(
      postText,
      userEmail,
      userName
    );

    if (success) {
      showToast("SUCCESS", "Post Created Successfully");
      dispatch(postsActions.setPosts({ posts: data }));
      setPostText("");

      if (setModalOpen !== null) {
        setModalOpen(false);
      }
    } else {
      showToast("ERROR", message);
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className="create-post" onClick={stopPropagation}>
      <div className="create-post-avatar-textarea-container">
        <div className="create-post-avatar-container">
          <img
            src={Avatar}
            alt="user-avatar"
            className="img-responsive img-round"
          />
        </div>
        <textarea
          className="create-post-text"
          placeholder="What's Happening..."
          value={postText}
          onChange={onChangeText}
        ></textarea>
      </div>
      <div className="create-post-footer">
        <FaSmile
          className="create-post-emoji-icon"
          onClick={() => setEmojiPickerOpen((prev) => !prev)}
        />
        {isEmojiPickerOpen && (
          <Picker
            pickerStyle={{
              position: "absolute",
              bottom: "-300px",
              left: "8px",
              zIndex: "var(--z-index-highest)",
            }}
            onEmojiClick={onEmojiClick}
          />
        )}
        <div className="create-post-footer-button-container">
          <p className="remaining-words">{remainingWords}</p>
          <PrimaryButton
            buttonText="post"
            isDisabled={isPostDisable}
            onClick={handleCreatePostClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
