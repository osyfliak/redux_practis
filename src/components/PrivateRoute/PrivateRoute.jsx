import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLogin } from "../../redux/auth/auth-select";

export const PrivateRoute = ({ children }) => {
  const login = useSelector(selectLogin);
  return login ? children : <Navigate to="/auth" />;
};
