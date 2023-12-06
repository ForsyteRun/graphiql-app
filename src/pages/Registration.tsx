import { NavLink } from 'react-router-dom';
import { RegistrationForm } from '../components';
import { AUTH_ROUTE } from '../constants/route';

const Registration = () => {
  return (
    <div className="tygh">
      <main className="main container page">
        <div className="authorization">
          <div className="authorization__container">
            <h1>Создать учетную запись</h1>
            <RegistrationForm />
          </div>
          <div className="authorization__information">
            <h4>Преимущества зарегистрированного пользователя:</h4>
            <div className="authorization__login">
              Уже есть учетная запись? Тогда просто жмите
              <NavLink to={AUTH_ROUTE}> Вход</NavLink>.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Registration;
