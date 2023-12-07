import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useAppDispatch } from '../store/types';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE, AUTH_ROUTE } from '../constants/route';
import { setIsLogin } from '../store/slice/userSlice';
import { useEffect } from 'react';

function AuthState() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setIsLogin(true));
          console.log(true);
          navigate(MAIN_ROUTE);
        } else {
          dispatch(setIsLogin(false));
          console.log(false);
          navigate(AUTH_ROUTE);
        }
      }),
    [dispatch, navigate]
  );
}

export { AuthState };
