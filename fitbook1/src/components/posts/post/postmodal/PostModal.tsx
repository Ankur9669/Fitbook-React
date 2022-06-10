import React from "react";
import { PostModalProps } from "./PostModalProps";
import {
  deletePost,
  showToast,
  useAppDispatch,
  postsActions,
  EditPostModal,
  ReactDOM,
  useState,
  AiFillDelete,
  AiFillEdit,
} from "./index";
import "./postmodal.css";

const PostModal = (props: PostModalProps) => {
  const { setPostModalOpen, postContent, postId } = props;
  const [isEditPostModalOpen, setEditPostModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleEditButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditPostModalOpen(true);
  };

  const handleDeleteButtonClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const { data, success, message } = await deletePost(postId);
    if (success) {
      dispatch(postsActions.setPosts({ posts: data }));
      showToast("SUCCESS", "Post Deleted Successfully");
    } else {
      showToast("ERROR", "Could not delete post");
    }
  };
  return (
    <div className="post-modal">
      <button className="post-modal-button" onClick={handleEditButtonClick}>
        Edit
        <AiFillEdit className="post-modal-icon" />
      </button>
      <button className="post-modal-button" onClick={handleDeleteButtonClick}>
        Delete
        <AiFillDelete />
      </button>

      {isEditPostModalOpen &&
        ReactDOM.createPortal(
          <EditPostModal
            setEditPostModalOpen={setEditPostModalOpen}
            postContent={postContent}
            postId={postId}
          />,
          document.getElementById("modal")!
        )}
    </div>
  );
};

export default PostModal;
