import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { WELCOME_ROUTE } from '../constants/route';

interface PrivateWrapperProps {
  children: ReactNode;
}

const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  const isAuth = true; //TODO: Replace with your authentication logic

  return <>{isAuth ? <>{children}</> : <Navigate to={WELCOME_ROUTE} />}</>;
};

export default PrivateWrapper;
