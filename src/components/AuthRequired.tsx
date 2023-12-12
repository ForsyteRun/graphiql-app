import { Navigate, useLocation } from 'react-router-dom';
import { AUTH_ROUTE } from '../constants/route';
import { useAppSelector } from '../store/types';

const AuthRequired = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { isAuth } = useAppSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to={AUTH_ROUTE} state={{ from: location }} replace />;
  }
  return children;
};

export default AuthRequired;
