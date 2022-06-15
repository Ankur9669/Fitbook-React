import React from "react";
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

const Navbar = () => {
  const { isUserLoggedIn } = useAppSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(authActions.logoutUser());
    localStorage.removeItem("token");
    showToast("SUCCESS", "User Logged out");
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
          />
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
        />
      </div>
    </div>
  );
};

export default Navbar;
