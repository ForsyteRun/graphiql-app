import { About } from '../components/Welcome/About';
import { Dog } from '../components/Welcome/Dog';
import { GraphQL } from '../components/Welcome/GraphQL';
import { OurTeam } from '../components/Welcome/OurTeam';
import { Plus } from '../components/Welcome/Plus';
import { Video } from '../components/Welcome/Video';

const Welcome = () => {
  return (
    <div className="welcome">
      <Video />
      <GraphQL />
      <Plus />
      <About />
      <Dog />
      <OurTeam />
    </div>
  );
};

export default Welcome;
