import React, { useState } from "react";
import {
  Fitbook,
  PrimaryButton,
  Link,
  useNavigate,
  useAppSelector,
  useAppDispatch,
  authActions,
  showToast,
} from "./index";
import "./navbar.css";
import User from "./user/User";
import Avatar from "../../assets/images/avatar.svg";
import { UserType } from "./UserType";
import { getUsersBySearchParams } from "../../util/api/getUserBySearchParams";

const Navbar = () => {
  const { isUserLoggedIn } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState<string>("");
  const [isUserContainerOpen, setUserContainerOpen] = useState<boolean>(false);
  const [searchUsers, setSearchUsers] = useState<UserType[]>([]);

  const handleLogoutClick = () => {
    dispatch(authActions.logoutUser());
    localStorage.removeItem("token");
    showToast("SUCCESS", "User Logged out");
  };
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    // TODO implement debounce

    const { data, success, message } = await getUsersBySearchParams(
      e.target.value
    );
    if (success) {
      setSearchUsers(data);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-app-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src={Fitbook} alt="fitbook-icon" className="fitbook-logo" />
          <h1 className="logo-text">
            F<span className="logo-sub-text">I</span>T
            <span className="logo-sub-text">B</span>O
            <span className="logo-sub-text">O</span>K
          </h1>
        </div>
        <div className="searchbar-container">
          <input
            type="search"
            placeholder="Enter search text..."
            className="nav-search"
            value={searchText}
            onChange={handleInputChange}
          />
          <div className="users-container">
            {searchUsers?.map((user: any) => (
              <User
                key={user._id}
                userId={user.userId}
                userName={`${user.firstName} ${user.lastName}`}
                imageUrl={Avatar}
                email={user.email}
                _id={user._id}
              />
            ))}
          </div>
        </div>
        <div className="icons-container">
          {isUserLoggedIn ? (
            <PrimaryButton buttonText="Logout" onClick={handleLogoutClick} />
          ) : (
            <Link to="/login">
              <PrimaryButton buttonText="Login" />
            </Link>
          )}
        </div>
      </div>
      <div className="mobile-searchbar-container">
        <input
          type="search"
          placeholder="Enter search text..."
          className="nav-search"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
