import React from 'react';
import { ProjectDetails } from '../types';
import IconSkill from './IconSkill';
import style from './project.module.css';
import IconLink from './IconLink';

const Project = (props: ProjectDetails) => {
  return (
    <div className="card bg-base-100 card-xs w-96 shadow-sm">
      <figure>
        <img
          src={props.background.src ?? ''}
          alt={props.background.alt ?? ''}
        />
      </figure>
      <div className="card-body">
        <div className='flex justify-between'>
          <h2 className="card-title text-3xl">{props.title}</h2>
          <div className='flex w-1/4 justify-between'>
            <IconLink {...props.repo} />
            <IconLink {...props.site} />
          </div>
        </div>
        
        <h2 className="text-2xl">{props.description}</h2>
<h3 className="text-lg">Technical Skills</h3>
        <div className="grid grid-cols-6 md:grid-cols-5 gap-4">
          {props.skills.map((s, i) => (
            <IconSkill key={i} src={s.src} alt={s.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
