import "./centercontent.css";
import CreatePost from "./createpost/CreatePost";
import Posts from "./posts/Posts";

const CenterContent = () => {
  return (
    <div className="center-content">
      <CreatePost />
      <Posts />
    </div>
  );
};

export default CenterContent;
