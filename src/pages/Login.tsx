import { NavLink } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../constants/route';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { LoginForm } from '../components/LoginForm';

const Login = () => {
  return (
    <div className="tygh">
      <Header />
      <main className="main page container">
        <div className="authorization">
          <div className="authorization__container">
            <h1>Войти</h1>
            <LoginForm />
          </div>
          <div className="authorization__information">
            <h4>Не зарегистрированы?</h4>
            <p>Создание учетной записи займет не больше минуты.</p>
            <NavLink to={REGISTRATION_ROUTE}>Создать учетную запись</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { Login };
