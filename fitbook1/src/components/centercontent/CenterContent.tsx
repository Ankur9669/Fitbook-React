import Loader from "../../components/loader/Loader";
import "./centercontent.css";
import CreatePost from "./createpost/CreatePost";
import Posts from "../../components/posts/Posts";

const CenterContent = () => {
  return (
    <div className="center-content">
      {/* <Loader /> */}
      <CreatePost />
      <Posts />
    </div>
  );
};

export default CenterContent;
