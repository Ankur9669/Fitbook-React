import React from "react";
import User from "./user/User";

const Users = () => {
  return (
    <div>
      <h3 className="right-sidebar-heading">Who to follow</h3>
      <div className="right-sidebar-content users-content">
        <User userName="Ankur Gupta" userId="Ankur@9669" />
        <User userName="Priya Patel" userId="Priya@3112" />
        <User userName="Asmit Shrivastava" userId="Asmit@1231231" />
      </div>
    </div>
  );
};

export default Users;
