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

  console.log(postId);
  return (
    <div className="center-content">
      {/* <Loader /> */}
      {pathName === "/" && <CreatePost />}
      {pathName === "/bookmarks" && <EmptyBookmark />}
      {pathName === "/profile" && <Profile />}
      {postId !== undefined && <SinglePost />}
      <Posts />
    </div>
  );
};

export default CenterContent;
