import Avatar from "../../../../assets/images/avatar.svg";
import { IoPersonAddSharp } from "../../../../assets/icons/icons";
import "./user.css";

type UserProps = {
  userName?: string;
  userId?: string;
  imageUrl?: string;
};
const User = (props: UserProps) => {
  const { userName, userId, imageUrl = Avatar } = props;
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
      <IoPersonAddSharp className="right-sidebar-follow-button" />
    </div>
  );
};

export default User;
