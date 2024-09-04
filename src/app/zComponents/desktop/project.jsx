import React from 'react';
import './project.css';

const Project = ({ date, p1, image, p2, link }) => {
  return (
    <div className='project-container'>
      <div className='project-date'>{date}</div>
      <div className='project-p1'>{p1}</div>
      <img src={image} alt="Project" className='project-image' />
      <div className='project-p2'>{p2}</div>
      {/* <a href={link} className='project-link'>View Project</a> */}
    </div>
  );
};

export default Project;
