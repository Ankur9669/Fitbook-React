import React from "react";
import Fitbook from "../../assets/images/fitBook.svg";
import "./navbar.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-app-container">
        <div className="logo-container">
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
          <Link to="/login">
            <PrimaryButton buttonText="Login" />
          </Link>
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
