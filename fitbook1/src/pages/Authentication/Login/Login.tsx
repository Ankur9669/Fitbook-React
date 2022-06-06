import React from "react";
// import { useDocumentTitle } from "../../../util/change-document-title";
import AuthenticationBackground from "../AuthenticationBackground";
import Loginform from "./Loginform";
import LoginImage from "../../../assets/images/login.svg";
import "./login.css";

function Login() {
  // useDocumentTitle("FitVid-Login");
  return (
    <div className="login-container">
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication login">
          <div className="authentication-image-container">
            <img src={LoginImage} alt="login" />
          </div>
          <Loginform />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
}

export default Login;
