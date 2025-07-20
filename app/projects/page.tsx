import React from 'react';
import data from '../../public/projectsData.json';
import { ProjectDetails } from '../components/types';
import Project from '../components/Projects/Project';

const Projects = () => {
  const projects: ProjectDetails[] = data.projects;

  return (
    <div className='flex flex-col items-center text-4xl'>
      <h1>Projects</h1>
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <Project key={p.id} {...p} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
