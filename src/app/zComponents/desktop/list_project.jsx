import React, { useState } from 'react';
import './list_project.css';

const List_project = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);

  const titles = [
    "Dibujo CSS",
    "UI APP IRTRA",
    "Blog",
    "SABTE",
    "Game of life"
  ];

  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  return (
    <div className='list-container'>
      <div className='left-side'>
        {titles.map((title, index) => (
          <div
            key={index}
            className='title'
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
          >
            <span>{title}</span>
            <span className='symbol'>✦</span>
          </div>
        ))}
      </div>
      <div className='right-side'>
        {hoveredTitle && (
          <ProjectDetail title={hoveredTitle} />
        )}
      </div>
    </div>
  )
};

const ProjectDetail = ({ title }) => {
  const details = {
    "Dibujo CSS": "1",
    "UI APP IRTRA": "2",
    "Blog": "3",
    "SABTE": "4",
    "Game of life": "5",
  };

  return (
    <div className='detail'>
      {details[title]}
    </div>
  );
};

export default List_project;
