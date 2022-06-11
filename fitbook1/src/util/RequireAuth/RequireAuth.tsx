import React, { ReactElement } from "react";
import { RequiredAuthProps } from "./RequiredAuthProps";
import { Navigate, useLocation, useAppSelector } from "./index";

// TODO change any
const RequireAuth: any = (props: RequiredAuthProps) => {
  const { children } = props;
  const location = useLocation();
  const { isUserLoggedIn } = useAppSelector((store) => store.auth);

  return !isUserLoggedIn ? (
    <Navigate to="/login" replace state={{ from: location }} />
  ) : (
    children
  );
};

export default RequireAuth;
