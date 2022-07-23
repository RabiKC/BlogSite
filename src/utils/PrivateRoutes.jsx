import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  let { values } = useContext(AuthContext);

  return !values.user ? <Navigate to="/sign-in" /> : children;
};

export default PrivateRoute;
