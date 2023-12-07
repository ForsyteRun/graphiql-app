import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { WELCOME_ROUTE } from '../constants/route';
import { useAppSelector } from '../store/types';

interface PrivateWrapperProps {
  children: ReactNode;
}

const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  const { isAuth } = useAppSelector((state) => state.user);
  return <>{isAuth ? <>{children}</> : <Navigate to={WELCOME_ROUTE} />}</>;
};

export default PrivateWrapper;
