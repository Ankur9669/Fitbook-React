import Loader from "../../components/loader/Loader";
import "./centercontent.css";
import {
  CreatePost,
  Posts,
  useLocation,
  MdPendingActions,
  EmptyBookmark,
  Profile,
  useParams,
} from "./index";
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
      {pathName === "/bookmarks" && <EmptyBookmark />}
      {pathName === "/profile" && <Profile />}
      {postId !== undefined && <SinglePost />}
      {postId === undefined && <Posts />}
    </div>
  );
};

export default CenterContent;
