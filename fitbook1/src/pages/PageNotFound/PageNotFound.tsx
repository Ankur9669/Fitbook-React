import React from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
// import { Footer, Navbar } from "../LikedVideos";
import Navbar from "../../components/navbar/Navbar";
import NotFoundImage from "../../assets/images/404.svg";
import "./pagenotfound.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../util/change-document-title";

const PageNotFound = () => {
  const navigate = useNavigate();
  useDocumentTitle("FitBook-404");

  return (
    <div>
      <div className="page-not-found-container">
        <div className="not-found-image-container">
          <img
            src={NotFoundImage}
            className="not-found-image img-responsive"
            alt="not-found"
          />
        </div>
        <PrimaryButton
          buttonText="Back To Previous Page"
          onClick={() => navigate(-1)}
          className="previous-button"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
