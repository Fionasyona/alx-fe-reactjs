// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

/**
 * A wrapper component that protects routes from unauthenticated access.
 * Usage: <ProtectedRoute><Profile /></ProtectedRoute>
 */
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth") === "true"; // Simulated login check

  if (!isAuthenticated) {
    // Redirect unauthenticated users to login page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
