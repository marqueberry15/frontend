import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({
    redirectPath = '/',
    children,
  }) => {
    const USER = sessionStorage.getItem("USER")
    const isLoggin = JSON.parse(USER)
    if (!isLoggin.isLoggin) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };