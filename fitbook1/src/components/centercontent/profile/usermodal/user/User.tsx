import React from "react";
import "./user.css";
import Avatar from "../../../../../assets/images/avatar.svg";

const User = () => {
  return (
    <div className="user">
      <div className="user-avatar-container">
        <img src={Avatar} alt="user" className="img-responsive img-round" />
      </div>
      <div className="user-content-container">
        <p className="font-normal weight-bold">Ankur Gupta</p>
        <p className="font-small">@Ankur9669</p>
      </div>
    </div>
  );
};

export default User;
