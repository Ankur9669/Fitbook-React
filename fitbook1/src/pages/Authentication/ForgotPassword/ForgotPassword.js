import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import AuthenticationBackground from "../../auth/AuthenticationBackground";
import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPassword() {
  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      <div className="wrapper">
        <AuthenticationBackground />
        <div className="authentication login">
          <div className="authentication-image-container">
            <img src="images/fitvid-forgot-password.svg" alt="forgotpassword" />
          </div>
          <ForgotPasswordForm />
        </div>
      </div>
      <div className="spacer-3"></div>
    </div>
  );
}

export default ForgotPassword;