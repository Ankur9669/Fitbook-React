import React, { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RequiredAuthProps } from "./RequiredAuthProps";

// TODO change any
const RequireAuth: any = (props: RequiredAuthProps) => {
  const token = localStorage.getItem("token");
  const { children } = props;
  const location = useLocation();

  return token == null ? (
    <Navigate to="/login" replace state={{ from: location }} />
  ) : (
    children
  );
  return <div>RequireAuth</div>;
};

export default RequireAuth;
