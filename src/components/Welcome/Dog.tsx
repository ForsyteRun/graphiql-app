import { NavLink } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import dog from '../../assets/img/dog.webp';
import { MAIN_ROUTE } from '../../constants/route';

const Dog = () => {
  const { isVisible, titleRef } = useIntersectionObserver();
  return (
    <div className={`dog ${isVisible ? 'visible' : ''}`} ref={titleRef}>
      <div className="dog__content container">
        <div className={`dog__img ${isVisible ? 'visible' : ''}`}>
          <img src={dog} alt="Dog" />
        </div>
        <div className="dog__description">
          <h2
            className={`dog__title title-animation ${
              isVisible ? 'visible' : ''
            }`}
          >
            Давайте делать что-нибудь вместе!
          </h2>
          <p>Попробуйте в использовании наш редактор.</p>
          <div className="dog__buttons">
            <NavLink to={MAIN_ROUTE}>
              <button className="button button-transparent">
                Перейти в редактор
              </button>
            </NavLink>
            <a>Познакомиться с командой</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dog };
