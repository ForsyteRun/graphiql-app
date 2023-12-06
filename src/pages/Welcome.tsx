import { OurTeam } from '../components';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div>
        <h1>GraphiQL is the ability to harness the full power of GraphQL</h1>
        <span>make a request to your own universe</span>
      </div>
      <ul className="welcome-list">
        <li>
          <span>Efficiency:</span>Clients get exactly the data they need, no
          more, no less
        </li>
        <li>
          <span>Flexibility:</span>Clients can request multiple resources in a
          single query
        </li>
        <li>
          <span>Versioning:</span>No need for versioning as clients have control
          over the data they receive
        </li>
        <li>
          <span>Strongly Typed:</span>Type checking at the query level
        </li>
      </ul>
      <OurTeam />
    </div>
  );
};

export default Welcome;
