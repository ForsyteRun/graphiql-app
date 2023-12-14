import { NavLink } from 'react-router-dom';
import { Logo } from '../components';
import {
  AUTH_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  WELCOME_ROUTE,
} from '../constants/route';
import { LogOut } from '../components/Logout';
import { AuthState } from '../utils/AuthState';
import { useAppSelector } from '../store/types';

const Header = () => {
  AuthState();
  const { isAuth } = useAppSelector((state) => state.user);
  return (
    <header className="header container">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__links">
        <NavLink to={WELCOME_ROUTE} className="link">
          Приветствие
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to={MAIN_ROUTE} className="link">
              Редактор
            </NavLink>
            <LogOut />
          </>
        ) : null}
      </div>
      {!isAuth && (
        <div className="header__buttons">
          <NavLink to={REGISTRATION_ROUTE}>
            <button className="button button-second">Регистрация</button>
          </NavLink>
          <NavLink to={AUTH_ROUTE}>
            <button className="button">Вход</button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
