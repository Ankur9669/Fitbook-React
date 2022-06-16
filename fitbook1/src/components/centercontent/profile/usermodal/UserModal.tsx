import {
  React,
  useEffect,
  useState,
  User,
  AiOutlineClose,
  useParams,
  getSingleUser,
} from "./index";

import "./usermodal.css";
import { UserModalProps } from "./UserModalProps";

const UserModal = (props: UserModalProps) => {
  const { setModalOpen, userModalHeading } = props;
  // TODO change any
  const [userDetails, setUserDetails] = useState<any>({
    userId: "",
    userName: "",
    userBio: "",
    followers: [],
    following: [],
  });
  const { emailId: userEmail } = useParams();

  useEffect(() => {
    // Functionality to disable the scroll of background
    document.body.style.overflow = "hidden";

    if (userEmail != undefined) {
      (async () => {
        const { data, success, message } = await getSingleUser(userEmail);
        if (success) {
          console.log(data);
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

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="user-modal" onClick={closeModal}>
      <div className="user-modal-container" onClick={stopPropagation}>
        <AiOutlineClose
          className="user-modal-close-icon"
          onClick={closeModal}
        />
        <h1 className="user-modal-heading font-large">{userModalHeading}</h1>
        <div className="users-container">
          {userModalHeading === "Followers"
            ? userDetails.followers.map((user: any) => (
                <div key={user._id}>
                  <User
                    userName={`${user.firstName} ${user.lastName}`}
                    userId={user.userID}
                  />
                </div>
              ))
            : userDetails.following.map((user: any) => (
                <div key={user._id}>
                  <User
                    userName={`${user.firstName} ${user.lastName}`}
                    userId={user.userId}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
