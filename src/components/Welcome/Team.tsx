import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import img1 from '../../assets/img/11.png';

const Team = () => {
  const { isVisible, titleRef } = useIntersectionObserver();

  return (
    <div className={`team2 ${isVisible ? 'visible' : ''}`} ref={titleRef}>
      <div className="team__content container">
        <h2
          className={`team2__title title-animation ${
            isVisible ? 'visible' : ''
          }`}
        >
          Наша команда 2
        </h2>
        <div className="team2__list">
          <img className="logo__image" alt="logo" title="" src={img1} />
        </div>
      </div>
    </div>
  );
};

export { Team };
