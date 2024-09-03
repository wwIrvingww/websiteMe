import React from 'react';
import styles from './portfolio.module.css';
import ProjectComponent from '../zComponents/mobile/project_component';

const Portfolio = () => {
  return (
    <div className="portfoliowrapper">
      <div className={styles.titlecontainer}>
        <h2>
          Portfolio
        </h2>
      </div>
      <div className="projects">
        <ProjectComponent title="Dibujo CSS" description="Realice un dibujo css" image="https://i.pinimg.com/736x/8e/c1/6a/8ec16ac6bfdf777518d13e1a7cde507d.jpg" link="https://lab04-cs-sonly-e468geh0q-irving-acostas-projects-400bd115.vercel.app/"/>
        <ProjectComponent title="Rediseño" description="Hice un rediseño para un app de IRTEA" image="https://i.pinimg.com/736x/23/a2/dc/23a2dc9c4c096fe3c87a6b5e9fb3dafc.jpg" link="https://lab04-cs-sonly-e468geh0q-irving-acostas-projects-400bd115.vercel.app/"/>

      </div>
    </div>
  );
}

export default Portfolio;
