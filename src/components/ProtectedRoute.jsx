import React from "react";
import { Route, Navigate } from "react-router-dom";
import auth from "../services/auth";

function ProtectedRoute({ element: Component, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        auth.isLoggedIn() ? <Component /> : <Navigate replace to="/login" />
      }
    />
  );
}

export default ProtectedRoute;
