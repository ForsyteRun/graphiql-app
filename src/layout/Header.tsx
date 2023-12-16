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
import { useState } from 'react';

const Header = () => {
  AuthState();
  const { isAuth } = useAppSelector((state) => state.user);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header className="header container">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__links">
        <NavLink to={WELCOME_ROUTE} className="link">
          Приветствие
        </NavLink>
        {isAuth && (
          <>
            <NavLink to={MAIN_ROUTE} className="link">
              Редактор
            </NavLink>
          </>
        )}
      </div>
      <div className="header__buttons">
        <span className="header__buttons-icon" onClick={toggleMenu}></span>
        <div className={`header__buttons-list ${menuVisible ? 'active' : ''}`}>
          {isAuth ? (
            <LogOut />
          ) : (
            <>
              <NavLink to={REGISTRATION_ROUTE} onClick={closeMenu}>
                <button className="button button-second">Регистрация</button>
              </NavLink>
              <NavLink to={AUTH_ROUTE} onClick={closeMenu}>
                <button className="button">Вход</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
