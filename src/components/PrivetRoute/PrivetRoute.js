import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.userData);
  const location = useLocation();
  if (isLoading) {
    return <h1 className="text-5xl my-10 text-center">Loading ...</h1>;
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivetRoute;
