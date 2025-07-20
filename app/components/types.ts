export interface imageLink {
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
  background: imageLink;
  site: iconLink;
  repo: iconLink;
  skills: imageLink[];
}

export interface Data {
  projects: ProjectDetails[];
}
