import React from "react";
import { useUser, Location } from "../../context/user-context";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();
  return user.isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RequiredAuth;
