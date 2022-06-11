import { UsersType } from "../types/UsersType";

const findFollowing = (users: UsersType, id: string) => {
  const userFound = users.some((user) => user._id === id);
  return userFound;
};

export { findFollowing };
