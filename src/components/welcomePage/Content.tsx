import { welcomePageContentList } from '../../constants';

const Content = () => {
  return (
    <ul className="welcome-list">
      {Object.entries(welcomePageContentList).map(([key, value]) => (
        <li key={key}>
          <span>{key}:</span> {value}
        </li>
      ))}
    </ul>
  );
};

export default Content;
