import PrimaryButton from "../buttons/PrimaryButton";
import "./right-sidebar.css";
import User from "./User";
import { CgTrending, IoPersonAddSharp } from "../../assets/icons/icons";

const RightSidebar = () => {
  //TODO change event type
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div className="right-sidebar-container">
      <div className="right-sidebar">
        <h3 className="right-sidebar-heading">Sort By</h3>
        <div className="right-sidebar-content">
          <PrimaryButton buttonText="what's trending" iconLeft={CgTrending} />
          <select className="filter-posts" onChange={handleChange}>
            <option value="oldest">Oldest First</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
        <h3 className="right-sidebar-heading">Who to follow</h3>
        <div className="right-sidebar-content">
          <User userName="Ankur Gupta" userId="Ankur@9669" />
          <User userName="Priya Patel" userId="Priya@3112" />
          <User userName="Asmit Shrivastava" userId="Asmit@1231231" />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
