export enum Role {
  developer = 'Developer',
  lead = 'Team Lead',
}

export type DevelopersData = {
  name: string;
  image: string;
  role: Role;
  github: string;
  about: string;
  contribution: string[];
};
