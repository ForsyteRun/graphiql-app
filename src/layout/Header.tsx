import { NavLink } from 'react-router-dom';
import { Logo } from '../components';
import {
  AUTH_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  WELCOME_ROUTE,
} from '../constants/route';
import { LogOut } from '../components/Logout';
import { useAppSelector } from '../store/types';
import { useMemo, useState } from 'react';
import { useLocalization } from '../context/LocalContext';
import { AuthState } from '../utils/AuthState';

const Header = () => {
  AuthState();
  const { isAuth } = useAppSelector((state) => state.user);
  const [menuVisible, setMenuVisible] = useState(false);
  const { translations, changeLanguage } = useLocalization();

  const handleLanguageChange = (newLanguage: string) => {
    changeLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const viewMainLink = useMemo(() => {
    {
      if (isAuth)
        return (
          <NavLink to={MAIN_ROUTE} className="link">
            {translations.main}
          </NavLink>
        );
    }
  }, [isAuth, translations.main]);

  const viewButtons = useMemo(() => {
    {
      if (isAuth) return <LogOut />;
      return (
        <>
          <NavLink to={REGISTRATION_ROUTE} onClick={closeMenu}>
            <button className="button button-second">
              {translations.registration}
            </button>
          </NavLink>
          <NavLink to={AUTH_ROUTE} onClick={closeMenu}>
            <button className="button">{translations.login}</button>
          </NavLink>
        </>
      );
    }
  }, [isAuth, translations.login, translations.registration]);

  return (
    <header className="header container">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__links">
        <NavLink to={WELCOME_ROUTE} className="link">
          {translations.welcome}
        </NavLink>
        {viewMainLink}
      </div>
      <div className="header__buttons">
        <span className="header__buttons-icon" onClick={toggleMenu}></span>
        <div className={`header__buttons-list ${menuVisible ? 'active' : ''}`}>
          {viewButtons}
        </div>
      </div>
      <div>
        <button className="button" onClick={() => handleLanguageChange('en')}>
          {translations.en}
        </button>
        <button className="button" onClick={() => handleLanguageChange('ru')}>
          {translations.ru}
        </button>
      </div>
    </header>
  );
};

export default Header;
