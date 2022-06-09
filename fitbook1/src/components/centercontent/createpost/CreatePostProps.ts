import { Dispatch, SetStateAction } from "react";

export type CreatePostProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>> | null;
};
