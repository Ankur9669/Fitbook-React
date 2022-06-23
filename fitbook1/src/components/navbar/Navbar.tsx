import React, { useEffect, useState } from "react";
import {
  Fitbook,
  PrimaryButton,
  Link,
  useNavigate,
  useAppSelector,
  useAppDispatch,
  authActions,
  showToast,
  User,
  Avatar,
  getUsersBySearchParams,
} from "./index";
import "./navbar.css";
import { UserType } from "./UserType";
import { debounce } from "../../util/debounce";

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
    if (e.target.value.length > 0) {
      setUserContainerOpen(true);
      // TODO implement debounce

      const { data, success, message } = await getUsersBySearchParams(
        e.target.value
      );
      if (success) {
        setSearchUsers(data);
      }
    } else {
      setUserContainerOpen(false);
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
            placeholder="Search Users..."
            className="nav-search"
            value={searchText}
            onChange={handleInputChange}
          />
          <div
            className={`${
              isUserContainerOpen ? "users-container" : "users-container-hide"
            }`}
          >
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
          placeholder="Search Users..."
          className="nav-search"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
