import "./createpost.css";
import { Avatar, FaSmile, PrimaryButton, useState, Picker } from "./index";

const CreatePost = () => {
  const wordsLimit = 250;
  const [remainingWords, setRemainingWords] = useState(wordsLimit);
  const [isPostDisable, setPostDisabled] = useState(true);
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [postText, setPostText] = useState("");

  const onChangeText = (e: any) => {
    let currentText = e.target.value;
    setPostText(currentText);
    setRemainingWords(wordsLimit - currentText.length);
    if (currentText.length > 250 || currentText.length === 0) {
      setPostDisabled(true);
    } else {
      setPostDisabled(false);
    }
  };

  const onEmojiClick = (event: any, emojiObject: any) => {
    setPostText((postText) => postText + emojiObject.emoji);
  };

  // TODO change type any
  const handleCreatePostClick = (e: any) => {};

  const stopPropagation = (e: any) => {
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
