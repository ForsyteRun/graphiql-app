import { DevelopersData } from '../types';

const TeamMember = ({ developer }: { developer: DevelopersData }) => {
  const { name, role, about, image, github, contribution } = developer;
  return (
    <div className="container-team">
      <div className="container-team__info">
        <img className="container-team__photo" src={image} alt={name} />
        <div className="container-team__details">
          <h3 className="container-team__name">{name}</h3>
          <h4 className="container-team__role">{role}</h4>
          <a
            href={`https://github.com/${github}`}
            className="container-team__github"
            rel="noreferrer"
            target="_blank"
            title={`${name} GitHub`}
          >
            {github}
          </a>
          <div>
            <h4 className="container-team__contribution_title">Contribution</h4>
            <ul className="container-team__contribution_list">
              {contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h4 className="container-team__about_title">About</h4>
      <p className="container-team__about">{about}</p>
    </div>
  );
};

export default TeamMember;
