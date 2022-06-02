import React from "react";
import PrimaryButton from "../../buttons/PrimaryButton";
import { CgTrending, IoPersonAddSharp } from "../../../assets/icons/icons";
import "./sort.css";

const Sort = () => {
  //TODO change event type
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h3 className="right-sidebar-heading">Sort By</h3>
      <div className="right-sidebar-content sort-content">
        <PrimaryButton buttonText="what's trending" iconLeft={CgTrending} />
        <select className="filter-posts" onChange={handleChange}>
          <option value="oldest">Oldest First</option>
          <option value="newest">Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
