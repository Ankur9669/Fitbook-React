import React, { useState } from "react";
import {
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
  PrimaryButton,
  SecondaryButton,
  Link,
  useNavigate,
  showToast,
  useAppDispatch,
  authActions,
  signUpUser,
} from "../index";
import "../authentication.css";

function SignupForm() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmitForm = (e: any) => {
    //TODO VALIDATIONS
    e.preventDefault();
    handleSignUpClick();
  };

  const handleSignUpClick = async () => {
    const { data, success, message } = await signUpUser(
      formDetails.firstName,
      formDetails.lastName,
      formDetails.userId,
      formDetails.email,
      formDetails.password
    );

    if (
      formDetails.firstName === "" ||
      formDetails.lastName === "" ||
      formDetails.email === "" ||
      formDetails.password === ""
    ) {
      showToast("ERROR", "Please Enter the details in the form");
      return;
    }
    if (success) {
      dispatch(authActions.setUser({ user: data, userLoggedInStatus: true }));
      showToast("SUCCESS", "Sign up successfull");
      navigate("/");
    } else {
      showToast("ERROR", message);
    }
  };
  return (
    <div className="authentication-form-container">
      <form className="authentication-form">
        <h2 className="font-large weight-semi-bold authentication-form-heading">
          <span className="logo-text font-large">FiT</span>BooK
        </h2>
        <p className="font-medium-large weight-semi-bold authentication-form-sub-heading">
          REGISTER WITH US
        </p>
        <div className="form-input-box">
          <input
            type="text"
            placeholder="First Name"
            value={formDetails.firstName}
            onChange={(e) =>
              setFormDetails({ ...formDetails, firstName: e.target.value })
            }
            required
          />
        </div>

        <div className="form-input-box">
          <input
            type="text"
            placeholder="Last Name"
            value={formDetails.lastName}
            onChange={(e) =>
              setFormDetails({ ...formDetails, lastName: e.target.value })
            }
            required
          />
        </div>

        <div className="form-input-box">
          <input
            type="text"
            placeholder="User Id"
            value={formDetails.userId}
            onChange={(e) =>
              setFormDetails({ ...formDetails, userId: e.target.value })
            }
            required
          />
        </div>

        <div className="form-input-box">
          <input
            type="email"
            placeholder="Email Address"
            value={formDetails.email}
            onChange={(e) =>
              setFormDetails({ ...formDetails, email: e.target.value })
            }
            required
          />
          <AiOutlineMail className="mail-icon" />
        </div>
        <div className="form-input-box">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={formDetails.password}
            onChange={(e) =>
              setFormDetails({ ...formDetails, password: e.target.value })
            }
            required
          />
          {isPasswordVisible ? (
            <AiFillEye
              className="mail-icon"
              onClick={() => setPasswordVisible((prev) => !prev)}
            />
          ) : (
            <AiFillEyeInvisible
              className="mail-icon"
              onClick={() => setPasswordVisible((prev) => !prev)}
            />
          )}
        </div>

        <PrimaryButton
          buttonText="Create New Account"
          className="form-cta-button"
          onClick={onSubmitForm}
        />

        <Link to="/login">
          <SecondaryButton
            buttonText="Already have an account!!!"
            className="form-cta-button"
          />
        </Link>
      </form>
    </div>
  );
}

export default SignupForm;
