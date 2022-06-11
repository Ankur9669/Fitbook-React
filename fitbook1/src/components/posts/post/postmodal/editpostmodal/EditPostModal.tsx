import {
  React,
  useEffect,
  useState,
  PrimaryButton,
  Avatar,
  Picker,
  FaSmile,
} from "./index";
import { EditPostModalProps } from "./EditPostModalProps";
import "./editpostmodal.css";
import {
  showToast,
  useAppDispatch,
} from "../../../../centercontent/createpost";
import { postsActions } from "../../../../centercontent/createpost";
import { editPost } from "../../../../../util/api/editPost";
import { useAppSelector } from "../../../../centercontent/createpost";

const EditPostModal = (props: EditPostModalProps) => {
  const { setEditPostModalOpen, postContent, postId } = props;
  const wordsLimit = 250;
  const [remainingWords, setRemainingWords] = useState(wordsLimit);
  const [isPostDisable, setPostDisabled] = useState(true);
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [postText, setPostText] = useState(postContent);
  const dispatch = useAppDispatch();

  //TODO change any type
  const { user }: any = useAppSelector((store) => store.auth);
  const userName = user.firstName + user.lastName;
  const userEmail = user.email;

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let currentText = e.target.value;
    setPostText(currentText);
    setRemainingWords(wordsLimit - currentText.length);
    if (
      currentText.length > 250 ||
      currentText.length === 0 ||
      currentText === postContent
    ) {
      setPostDisabled(true);
    } else {
      setPostDisabled(false);
    }
  };

  // TODO change event
  const onEmojiClick = (event: React.MouseEvent, emojiObject: any) => {
    setPostText((postText) => postText + emojiObject.emoji);
  };

  const handleEditPostClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    const { data, success, message } = await editPost(
      postId,
      postText,
      userEmail,
      userName
    );

    if (success) {
      dispatch(postsActions.setPosts({ posts: data }));
      showToast("SUCCESS", "Post edited Successfully");
      setEditPostModalOpen(false);
    } else {
      showToast("ERROR", message);
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  useEffect(() => {
    // Functionality to disable the scroll of background
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleModalBackgroundClick = () => {
    setEditPostModalOpen(false);
  };
  return (
    <div className="edit-modal" onClick={handleModalBackgroundClick}>
      <div className="edit-modal-container" onClick={stopPropagation}>
        <div className="edit-modal-avatar-textarea-container">
          <div className="edit-modal-avatar-container">
            <img
              src={Avatar}
              alt="user-avatar"
              className="img-responsive img-round"
            />
          </div>
          <textarea
            className="edit-modal-text"
            placeholder="What's Happening..."
            value={postText}
            onChange={onChangeText}
          ></textarea>
        </div>
        <div className="edit-modal-footer">
          <FaSmile
            className="edit-modal-emoji-icon"
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
          <div className="edit-modal-footer-button-container">
            <p className="remaining-words">{remainingWords}</p>
            <PrimaryButton
              buttonText="edit"
              isDisabled={isPostDisable}
              onClick={handleEditPostClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
