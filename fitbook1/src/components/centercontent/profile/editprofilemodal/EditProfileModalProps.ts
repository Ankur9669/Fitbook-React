import { Dispatch, SetStateAction } from "react";

export type EditProfileModalProps = {
  setEditProfileModalOpen: Dispatch<SetStateAction<boolean>>;
  setUserDetails: Dispatch<SetStateAction<any>>;
};
