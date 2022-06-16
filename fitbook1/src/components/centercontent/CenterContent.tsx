import Loader from "../../components/loader/Loader";
import "./centercontent.css";
import {
  CreatePost,
  Posts,
  useLocation,
  MdPendingActions,
  Bookmark,
  Profile,
  useParams,
} from "./index";
import Messages from "./messages/Messages";
import SinglePost from "./singlepost/SinglePost";

const CenterContent = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const params = useParams();
  const postId = params?.postId;

  return (
    <div className="center-content">
      {/* <Loader /> */}
      {pathName === "/" && <CreatePost setModalOpen={null} />}
      {pathName === "/bookmarks" && <Bookmark />}
      {pathName.includes("/profile") && <Profile />}
      {pathName === "/messages" && <Messages />}
      {postId !== undefined && <SinglePost />}
      {postId === undefined &&
        pathName !== "/bookmarks" &&
        pathName !== "/messages" && <Posts />}
    </div>
  );
};

export default CenterContent;
