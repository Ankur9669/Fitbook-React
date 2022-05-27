import "./right-sidebar.css";
import User from "./User";

const RightSidebar = () => {
  return (
    <div className="right-sidebar-container">
      <div className="right-sidebar">
        <h3 className="right-sidebar-heading">Who to follow</h3>
        <div className="right-sidebar-users">
          <User userName="Ankur Gupta" userId="Ankur@9669" />
          <User userName="Priya Patel" userId="Priya@3112" />
          <User userName="Asmit Shrivastava" userId="Asmit@1231231" />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
