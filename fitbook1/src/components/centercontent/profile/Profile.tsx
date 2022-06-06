import "./profile.css";
import { Avatar, PrimaryButton } from "./index";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-background"></div>
      <div className="profile-content-container">
        <div className="user-image-container">
          <img src={Avatar} alt="user-avatar" className="user-image" />
        </div>
        <h3 className="profile-user-id font-medium-large">@Ankur9669</h3>
        <p className="profile-user-name font-medium">Ankur Gupta</p>
        <p className="profile-user-bio font-medium">
          A Web developer from jabalpur
        </p>
        <PrimaryButton buttonText="Visit Website" />
      </div>
      <div className="user-info">
        <p className="font-medium user-item-clickable">Followers: 10</p>
        <p className="font-medium">Posts</p>
        <p className="font-medium user-item-clickable">Following: 12</p>
      </div>
    </div>
  );
};

export default Profile;
