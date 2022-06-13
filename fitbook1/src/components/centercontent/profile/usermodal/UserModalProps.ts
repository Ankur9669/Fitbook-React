import { Dispatch, SetStateAction } from "react";

export type UserModalProps = {
  userModalHeading: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};
