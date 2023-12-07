import { developersData } from '../../constants/developersData';
import TeamMember from './TeamMember';

const OurTeam = () => {
  return (
    <div>
      <h2 className="ourTeam-title">OurTeam</h2>
      <div className="ourTeam-container">
        {developersData.map((developer) => (
          <TeamMember key={developer.name} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
