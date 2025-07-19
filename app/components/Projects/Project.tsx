import React from 'react';
import { ProjectDetails } from '../types';
import IconSkill from './IconSkill';

const Project = (props: ProjectDetails) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className='w-full grid grid-cols-5 gap-2'>
        {props.skills.map((s, i) => (
          <IconSkill key={i} src={s.src} alt={s.alt} />
          // <div key={i}>{s.alt}</div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
