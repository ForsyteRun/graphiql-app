import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { Member } from './Member';

const Team = () => {
  const { isVisible, titleRef } = useIntersectionObserver();

  return (
    <div className={`team ${isVisible ? 'visible' : ''}`} ref={titleRef}>
      <div className="team__content container">
        <h2
          className={`team__title title-animation ${
            isVisible ? 'visible' : ''
          }`}
        >
          Наша команда
        </h2>
        <div className="team__list">
          <Member />
        </div>
      </div>
    </div>
  );
};

export { Team };
