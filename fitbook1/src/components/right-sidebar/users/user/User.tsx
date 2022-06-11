import {
  Avatar,
  IoPersonAddSharp,
  RiUserUnfollowFill,
  useAppDispatch,
  useAppSelector,
  findFollowing,
  followUser,
  unfollowUser,
  authActions,
  showToast,
} from "./index";

import { UserProps } from "./UserProps";
import "./user.css";

const User = (props: UserProps) => {
  const { userName, userId, imageUrl = Avatar, _id, email } = props;
  const { user }: any = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();
  const following = user.following;
  const isFollowedUser = findFollowing(following, _id);

  const handleFollowIconClick = async () => {
    const { data, success, message } = await followUser(email);
    if (success) {
      dispatch(authActions.setUser({ user: data, userLoggedInStatus: true }));
      showToast("SUCCESS", "Followed User");
    } else {
      showToast("ERROR", message);
    }
  };

  const handleUnFollowIconClick = async () => {
    const { data, success, message } = await unfollowUser(email);
    if (success) {
      dispatch(authActions.setUser({ user: data, userLoggedInStatus: true }));
      showToast("SUCCESS", "Unfollowed User");
    } else {
      showToast("ERROR", message);
    }
  };

  // TODO remove this
  // console.log(userName, "", isFollowedUser);

  return (
    <div className="right-sidebar-user">
      <div className="right-sidebar-user-image-container">
        <img
          src={imageUrl}
          alt="user-avatar"
          className="right-sidebar-user-avatar img-responsive img-round"
        />
      </div>

      <div className="right-sidebar-user-text-container">
        <h3>{userName}</h3>
        <h4>{userId}</h4>
      </div>

      {isFollowedUser ? (
        <RiUserUnfollowFill
          className="right-sidebar-follow-button"
          onClick={handleUnFollowIconClick}
        />
      ) : (
        <IoPersonAddSharp
          className="right-sidebar-follow-button"
          onClick={handleFollowIconClick}
        />
      )}
    </div>
  );
};

export default User;
