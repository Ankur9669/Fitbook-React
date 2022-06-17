import "./profile.css";
import {
  Avatar,
  PrimaryButton,
  useState,
  ReactDOM,
  UserModal,
  useAppSelector,
  useParams,
  useEffect,
} from "./index";
import { getSingleUser } from "../../../util/api/getSingleUser";
import EditProfileModal from "./editprofilemodal/EditProfileModal";
import { getSinglePost } from "../singlepost";
import { UsersType } from "../../../util/types/UsersType";

const Profile = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalHeading, setModalHeading] = useState<string>("");
  const [isEditProfileModalOpen, setEditProfileModalOpen] =
    useState<boolean>(false);
  const { user }: any = useAppSelector((store) => store.auth);
  const { emailId: userEmail } = useParams();
  const [userDetails, setUserDetails] = useState<any>({
    userId: "",
    userName: "",
    userBio: "",
    followers: [],
    following: [],
  });
  const userId = user?.userId == undefined ? "unknown" : user.userId;
  const userName = `${user.firstName} ${user.lastName}`;
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

  useEffect(() => {
    if (userEmail != undefined && userEmail !== user.email) {
      (async () => {
        const { data, success, message } = await getSingleUser(userEmail);
        if (success) {
          setUserDetails({
            userId: data.userId,
            userName: `${data.firstName} ${data.lastName}`,
            userBio: data.bio,
            followers: data.followers,
            following: data.following,
          });
        }
      })();
    }
  }, []);

  return (
    <div className="profile-container">
      {user.email === userEmail && (
        <button
          className="edit-profile-button"
          onClick={handleEditProfileButtonClick}
        >
          Edit
        </button>
      )}

      <div className="profile-background"></div>
      <div className="profile-content-container">
        <div className="user-image-container">
          <img src={Avatar} alt="user-avatar" className="user-image" />
        </div>
        <h3 className="profile-user-id font-medium-large">
          {user.email === userEmail ? userId : userDetails.userId}
        </h3>
        <p className="profile-user-name font-medium">
          {user.email === userEmail ? userName : userDetails.userName}
        </p>
        <p className="profile-user-bio font-medium">
          {user.email === userEmail ? userBio : userDetails.userBio}
        </p>
        <PrimaryButton buttonText="Visit Website" />
      </div>
      <div className="user-info">
        <p
          className="font-medium user-item-clickable"
          onClick={handleFollowersClick}
        >
          Followers:{" "}
          {user.email === userEmail
            ? followers.length
            : userDetails.followers.length}
        </p>
        <p className="font-medium">Posts</p>
        <p
          className="font-medium user-item-clickable"
          onClick={handleFollowingClick}
        >
          Following:{" "}
          {user.email === userEmail
            ? following.length
            : userDetails.following.length}
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
            setUserDetails={setUserDetails}
          />,
          document.getElementById("modal")!
        )}
    </div>
  );
};

export default Profile;
