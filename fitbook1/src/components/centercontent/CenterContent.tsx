import Loader from "../../components/loader/Loader";
import "./centercontent.css";
import {
  CreatePost,
  Posts,
  useLocation,
  MdPendingActions,
  EmptyBookmark,
  Profile,
} from "./index";

const CenterContent = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="center-content">
      {/* <Loader /> */}
      {pathName === "/" && <CreatePost />}
      {pathName === "/bookmarks" && <EmptyBookmark />}
      {pathName === "/profile" && <Profile />}
      <Posts />
    </div>
  );
};

export default CenterContent;
