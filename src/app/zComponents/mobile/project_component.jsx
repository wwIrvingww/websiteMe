"use client"
import React from 'react'
import './project_component.css'

const ProjectComponent = ({ title, description, image, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  }

  return (
    <div className="project-component">
      <img src={image} alt="project_image" className="project-image" />
      <div className="text-container">
        <h1 className="project-title">{title}</h1>
        <p className="project-description">{description}</p>
        <button type="button" onClick={handleClick} className="formButton">VER</button>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default ProjectComponent;
