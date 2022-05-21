import React from "react";
import Fitbook from "../../assets/images/fitBook.svg";
import "./navbar.css";

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
          <input type="search" placeholder="search" className="nav-search" />
        </div>
        <div className="icons-container"></div>
      </div>
    </div>
  );
};

export default Navbar;
