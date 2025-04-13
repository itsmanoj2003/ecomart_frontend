import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth';

const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const currentUser = user || storedUser;

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && currentUser.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />; // Or show 403 page
  }

  return children;
};

export default PrivateRoute;
