import { Dispatch, SetStateAction } from "react";

export type PostModalProps = {
  setPostModalOpen: Dispatch<SetStateAction<boolean>>;
  postContent: string;
  postId: string;
};
