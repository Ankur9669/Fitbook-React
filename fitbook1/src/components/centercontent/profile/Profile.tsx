import "./profile.css";
import {
  Avatar,
  PrimaryButton,
  useState,
  ReactDOM,
  UserModal,
  useAppSelector,
} from "./index";
import EditProfileModal from "./editprofilemodal/EditProfileModal";

const Profile = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalHeading, setModalHeading] = useState<string>("");
  const [isEditProfileModalOpen, setEditProfileModalOpen] =
    useState<boolean>(false);
  const { user }: any = useAppSelector((store) => store.auth);
  const userId = user?.userId == undefined ? "unknown" : user.userId;
  const username = `${user.firstName} ${user.lastName}`;
  const userBio = user.bio;
  const followers = user.followers;
  const following = user.following;

  const handleEditProfileButtonClick = async () => {
    setEditProfileModalOpen(true);
  };
  const handleFollowersClick = () => {
    setModalHeading("Followers");
    setModalOpen(true);
  };
  const handleFollowingClick = () => {
    setModalHeading("Following");
    setModalOpen(true);
  };

  return (
    <div className="profile-container">
      <button
        className="edit-profile-button"
        onClick={handleEditProfileButtonClick}
      >
        Edit
      </button>
      <div className="profile-background"></div>
      <div className="profile-content-container">
        <div className="user-image-container">
          <img src={Avatar} alt="user-avatar" className="user-image" />
        </div>
        <h3 className="profile-user-id font-medium-large">{userId}</h3>
        <p className="profile-user-name font-medium">{username}</p>
        <p className="profile-user-bio font-medium">{userBio}</p>
        <PrimaryButton buttonText="Visit Website" />
      </div>
      <div className="user-info">
        <p
          className="font-medium user-item-clickable"
          onClick={handleFollowersClick}
        >
          Followers: {followers.length}
        </p>
        <p className="font-medium">Posts</p>
        <p
          className="font-medium user-item-clickable"
          onClick={handleFollowingClick}
        >
          Following: {following.length}
        </p>
      </div>
      {isModalOpen &&
        ReactDOM.createPortal(
          <UserModal
            setModalOpen={setModalOpen}
            userModalHeading={modalHeading}
          />,
          document.getElementById("modal")!
        )}

      {isEditProfileModalOpen &&
        ReactDOM.createPortal(
          <EditProfileModal
            setEditProfileModalOpen={setEditProfileModalOpen}
          />,
          document.getElementById("modal")!
        )}
    </div>
  );
};

export default Profile;
