import { developersData } from '../../constants/developersData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import TeamMember from './TeamMember';

const OurTeam = () => {
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
          {developersData.map((developer) => (
            <TeamMember key={developer.name} developer={developer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { OurTeam };
