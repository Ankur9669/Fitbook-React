import React, { useEffect } from "react";
import {
  LeftSidebar,
  RightSidebar,
  CenterContent,
  useAppDispatch,
  useAppSelector,
  getUserPosts,
  postsActions,
  useParams,
  useNavigate,
  showToast,
} from "./index";
import "./profile.css";

const Profile = () => {
  // TODO remove any
  const dispatch = useAppDispatch();
  const { emailId: userEmail } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userEmail != undefined) {
      (async () => {
        const { data, success, message } = await getUserPosts(userEmail);
        if (success) {
          dispatch(postsActions.setPosts({ posts: data }));
        }
      })();
    } else {
      navigate("/404");
      showToast("ERROR", "User Not Found");
    }
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
