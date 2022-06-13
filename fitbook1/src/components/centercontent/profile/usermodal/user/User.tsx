import React from "react";
import "./user.css";
import Avatar from "../../../../../assets/images/avatar.svg";
import { UserType } from "../UserType";

const User = (props: UserType) => {
  const { userName, userId } = props;
  return (
    <div className="user">
      <div className="user-avatar-container">
        <img src={Avatar} alt="user" className="img-responsive img-round" />
      </div>
      <div className="user-content-container">
        <p className="font-normal weight-bold">{userName}</p>
        <p className="font-small">{userId}</p>
      </div>
    </div>
  );
};

export default User;
