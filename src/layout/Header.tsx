import { NavLink } from 'react-router-dom';
import { Logo } from '../components';
import { AUTH_ROUTE, REGISTRATION_ROUTE } from '../constants/route';

const Header = () => {
  return (
    <header className="header container">
      <div className="row">
        <div className="top-logo">
          <Logo />
        </div>
        <div className="nav-bar__block">
          <NavLink to={REGISTRATION_ROUTE}>
            <button className="button button-second">Регистрация</button>
          </NavLink>

          <NavLink to={AUTH_ROUTE}>
            <button className="button">Вход</button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
