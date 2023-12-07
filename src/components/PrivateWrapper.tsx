import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { WELCOME_ROUTE } from '../constants/route';
import { useAppSelector } from '../store/types';

interface PrivateWrapperProps {
  children: ReactNode;
}

const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  const { isLogin } = useAppSelector((state) => state.user);
  //const isAuth = true; //TODO: Replace with your authentication logic

  return <>{isLogin ? <>{children}</> : <Navigate to={WELCOME_ROUTE} />}</>;
};

export default PrivateWrapper;
