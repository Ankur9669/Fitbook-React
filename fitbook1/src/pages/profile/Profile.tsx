import React, { useState, useEffect } from "react";
import {
  LeftSidebar,
  RightSidebar,
  CenterContent,
  useAppDispatch,
  useAppSelector,
  getUserPosts,
  postsActions,
} from "./index";

import "./profile.css";
const Profile = () => {
  const [isUsersModalOpen, setUsersModalOpen] = useState(false);
  // TODO remove any
  const { user }: any = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  const userEmail = user.email;
  useEffect(() => {
    (async () => {
      const { data, success, message } = await getUserPosts(userEmail);

      if (success) {
        dispatch(postsActions.setPosts({ posts: data }));
      }
    })();
  }, []);
  return (
    <div className="app-container">
      <LeftSidebar />
      <CenterContent />
      <RightSidebar />
    </div>
  );
};

export default Profile;
