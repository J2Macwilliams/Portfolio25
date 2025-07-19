import React from 'react';
import data from '../../public/projectsData.json';
import { ProjectDetails } from '../components/types';
import styles from './projects.module.css';
import Project from '../components/Projects/Project';

const Projects = () => {
  const projects: ProjectDetails[] = data.projects;

  return (
    <div className="grid grid-cols-4 gap-4">
      {projects.map((p) => (
        <Project key={p.id} {...p}/>
      ))}
    </div>
  );
};

export default Projects;
