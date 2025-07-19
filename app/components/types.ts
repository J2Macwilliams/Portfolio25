export interface iconSkill {
  src: string;
  alt: string;
}

export interface iconLink {
  src: string;
  alt: string;
  link: string;
}

export interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  background: string;
  site: iconLink;
  repo: iconLink;
  skills: iconSkill[];
}

export interface Data {
  projects: ProjectDetails[];
}
