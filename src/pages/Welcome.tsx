import { Content, OurTeam } from '../components';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-title">
        <h1>GraphiQL is the ability to harness the full power of GraphQL</h1>
        <span>make a request to your own universe</span>
      </div>
      <Content />
      <OurTeam />
    </div>
  );
};

export default Welcome;
