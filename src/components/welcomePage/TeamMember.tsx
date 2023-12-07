import { DevelopersData } from '../../types';

const TeamMember = ({ developer }: { developer: DevelopersData }) => {
  const { name, role, about, image, github, contribution } = developer;
  return (
    <div className="team">
      <div className="team__info">
        <img className="team__photo" src={image} alt={name} />
        <div className="team__details">
          <h3 className="team__name">{name}</h3>
          <h4 className="team__role">{role}</h4>
          <a
            href={`https://github.com/${github}`}
            className="team__github"
            rel="noreferrer"
            target="_blank"
            title={`${name} GitHub`}
          >
            {github}
          </a>
          <div>
            <h4 className="team__contribution_title">Contribution</h4>
            <ul className="team__contribution_list">
              {contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h4 className="team__about_title">About</h4>
      <p className="team__about">{about}</p>
    </div>
  );
};

export default TeamMember;
