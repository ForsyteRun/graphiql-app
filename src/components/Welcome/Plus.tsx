import { NavLink } from 'react-router-dom';
import { welcomePlus } from '../../constants';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { MAIN_ROUTE } from '../../constants/route';

const Plus = () => {
  const { isVisible, titleRef } = useIntersectionObserver();

  return (
    <div className={`plus ${isVisible ? 'visible' : ''}`} ref={titleRef}>
      <div className="plus__content container">
        <h2
          className={`plus__title title-animation ${
            isVisible ? 'visible' : ''
          }`}
        >
          Преимущества
        </h2>
        <div className="plus__description">
          {welcomePlus.label.map((item, index) => (
            <div
              key={index}
              className={`plus__item ${isVisible ? 'visible' : ''}`}
            >
              <h3>{item}</h3>
              <p>{welcomePlus.description[index]}</p>
            </div>
          ))}
        </div>
      </div>
      <NavLink to={MAIN_ROUTE}>
        <button className="button">Перейти в редактор</button>
      </NavLink>
    </div>
  );
};

export { Plus };
