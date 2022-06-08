import React from "react";
import {
  SignupForm,
  AuthenticationBackground,
  Navbar,
  useDocumentTitle,
  SignupImage,
} from "./index";
import "../authentication.css";
import "./signup.css";

const SignUp = () => {
  useDocumentTitle("FitBook-Signup");
  return (
    <div className="signup-container">
      <Navbar />
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication signup">
          <div className="authentication-image-container">
            <img src={SignupImage} alt="signup-image" />
          </div>
          <SignupForm />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
};

export default SignUp;
