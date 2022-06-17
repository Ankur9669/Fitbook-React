import React from "react";
import "./user.css";
import Avatar from "../../../assets/images/avatar.svg";
import { Link } from "react-router-dom";
import { UserType } from "../UserType";

const User = (props: UserType) => {
  const { userName, userId, imageUrl = Avatar, _id, email } = props;

  return (
    <Link to={`/profile/${email}`} className="navbar-user">
      <div className="navbar-user-image-container">
        <img
          src={Avatar}
          alt="user-avatar"
          className="navbar-user-avatar img-responsive img-round"
        />
      </div>

      <div className="navbar-user-text-container">
        <h3>{userName}</h3>
        <h4>{userId}</h4>
      </div>
    </Link>
  );
};

export default User;
