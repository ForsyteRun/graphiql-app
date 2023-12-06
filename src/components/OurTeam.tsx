import { developersData } from '../constants/developersData';
import TeamMember from './TeamMember';

const OurTeam = () => {
  return (
    <div>
      <div>OurTeam</div>;
      {developersData.map((developer) => (
        <TeamMember key={developer.name} developer={developer} />
      ))}
    </div>
  );
};

export default OurTeam;
