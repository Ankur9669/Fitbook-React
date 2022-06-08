import { Dispatch, SetStateAction } from "react";

export type EditPostModalProps = {
  setEditPostModalOpen: Dispatch<SetStateAction<boolean>>;
  postContent: string;
  postId: string;
};
