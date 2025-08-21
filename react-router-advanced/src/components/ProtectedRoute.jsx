// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
