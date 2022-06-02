import "./right-sidebar.css";
import { useLocation } from "react-router-dom";
import Sort from "./sort/Sort";
import Users from "./users/Users";

const RightSidebar = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <div className="right-sidebar-container">
      <div className="right-sidebar">
        {pathName === "/" && <Sort />}
        <Users />
      </div>
    </div>
  );
};

export default RightSidebar;
