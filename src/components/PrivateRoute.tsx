import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../states/store';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  
  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" />;
};

export default PrivateRoute;
