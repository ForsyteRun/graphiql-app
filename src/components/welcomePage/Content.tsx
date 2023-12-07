import { welcomePageContentList } from '../../constants';

const Content = () => {
  return (
    <ul className="welcome-list">
      {Object.entries(welcomePageContentList).map(([key, value]) => (
        <li key={key}>
          {key}
          <span>:</span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Content;
