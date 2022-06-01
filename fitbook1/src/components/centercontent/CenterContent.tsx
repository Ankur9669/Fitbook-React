import Loader from "../../components/loader/Loader";
import "./centercontent.css";
import CreatePost from "./createpost/CreatePost";
import Posts from "../../components/posts/Posts";
import { useLocation } from "react-router";
import { MdPendingActions } from "react-icons/md";
import EmptyBookmark from "./emptybookmark/EmptyBookmark";

const CenterContent = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="center-content">
      {/* <Loader /> */}
      {pathName === "/" && <CreatePost />}
      {pathName === "/bookmarks" && <EmptyBookmark />}
      <Posts />
    </div>
  );
};

export default CenterContent;
