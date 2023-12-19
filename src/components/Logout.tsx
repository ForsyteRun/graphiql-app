import { logout } from '../firebase/firebase';
import { useAppDispatch } from '../store/types';
import { setIsLogin } from '../store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { MAIN_ROUTE } from '../constants/route';
import { useLocalization } from '../context/LocalContext';

const LogOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { translations } = useLocalization();

  const signOut = useCallback(() => {
    logout();
    dispatch(setIsLogin(false));
    navigate(MAIN_ROUTE);
  }, [dispatch, navigate]);

  return (
    <button className="button" onClick={signOut}>
      {translations.logout}
    </button>
  );
};

export { LogOut };
