import { NavLink } from 'react-router-dom';
import { WELCOME_ROUTE } from '../constants/route';
import logo from '../assets/svg/graphic.svg';

const Logo = () => {
  return (
    <div className="logo-container">
      <NavLink to={WELCOME_ROUTE} title="">
        <img className="logo-container__image" alt="logo" title="" src={logo} />
      </NavLink>
    </div>
  );
};

export default Logo;
