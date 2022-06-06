import React from "react";
import {
  useDocumentTitle,
  AuthenticationBackground,
  Loginform,
  LoginImage,
} from "./index";
import "./login.css";

const Login = () => {
  useDocumentTitle("FitBook-Login");
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
};

export default Login;
