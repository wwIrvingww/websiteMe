import React from 'react';
import './cross_landing.css'; // External CSS file for styles

const Landing = () => {
    return (
      <div className="landing-container">
        {/* Horizontal line */}
        <div className="horizontal-line" />
  
        {/* Vertical line */}
        <div className="vertical-line" />
  
        {/* Title FABRICIO */}
        <div className="title-container">
          <h1 className="title">FABRICIO</h1>
        </div>
  
        {/* Images Container */}
        <div className="image-container">
          <img src={'./portrait.png'} alt="Portrait 1" className="image image1" />
          <img src={'./portrait.png'} alt="Portrait 1" className="image image2" />
        </div>
  
        {/* Job Titles */}
        <div className="job-titles">
          <h2 className="job-title">Web Developer</h2>
          <h2 className="job-title">UX/UI Designer</h2>
        </div>

        <div className="shape_container"> 
            <img src='./Shape1.png' alt='Shape 1'/> 
        </div>
      </div>
    );
  };
  
export default Landing;