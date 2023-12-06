import { NavLink } from 'react-router-dom';
import { WELCOME_ROUTE } from '../constants/route';

const NotFound = () => {
  return (
    <div className="main container">
      <div className="exception">
        <div className="exception__code">
          404
          <span className="exception__code-txt">Ошибка</span>
        </div>
        <div className="exception__title-info">
          <h1 className="exception__title">
            Извините! Мы не смогли найти то, что вы искали.
          </h1>
          <p className="exception__info">Запрашиваемая страница не найдена.</p>
          <div className="exception__links">
            <div className="exception__links-item">
              <NavLink
                to={WELCOME_ROUTE}
                title=""
                className="exception__links-a"
              >
                Перейти на главную страницу
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
