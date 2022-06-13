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
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditProfileModalOpen, setEditProfileModalOpen] =
    useState<boolean>(false);
  const { user }: any = useAppSelector((store) => store.auth);
  const userId = user?.userId == undefined ? "unknown" : user.userId;
  const username = `${user.firstName} ${user.lastName}`;
  const followers = user.followers;
  const following = user.following;

  const handleEditProfileButtonClick = async () => {
    setEditProfileModalOpen(true);
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
        <p className="profile-user-bio font-medium">
          A Web developer from jabalpur
        </p>
        <PrimaryButton buttonText="Visit Website" />
      </div>
      <div className="user-info">
        <p
          className="font-medium user-item-clickable"
          onClick={() => setModalOpen(true)}
        >
          Followers: {followers.length}
        </p>
        <p className="font-medium">Posts</p>
        <p
          className="font-medium user-item-clickable"
          onClick={() => setModalOpen(true)}
        >
          Following: {following.length}
        </p>
      </div>
      {isModalOpen &&
        ReactDOM.createPortal(
          <UserModal setModalOpen={setModalOpen} />,
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
