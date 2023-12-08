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

const Header = () => {
  AuthState();
  return (
    <header className="header container">
      <div className="row">
        <div className="top-logo">
          <Logo />
        </div>
        <div className="nav-bar__block">
          <NavLink to={WELCOME_ROUTE}>
            <button className="button button-second">Приветствие</button>
          </NavLink>
          <NavLink to={MAIN_ROUTE}>
            <button className="button button-second">Главная</button>
          </NavLink>
          <NavLink to={REGISTRATION_ROUTE}>
            <button className="button button-second">Регистрация</button>
          </NavLink>
          <NavLink to={AUTH_ROUTE}>
            <button className="button">Вход</button>
          </NavLink>
          <LogOut />
        </div>
      </div>
    </header>
  );
};

export default Header;
