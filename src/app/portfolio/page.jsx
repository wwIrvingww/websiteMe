"use client"
import React, { useEffect } from 'react';
import styles from './portfolio.module.css';
import anime from 'animejs';
import ProjectComponent from '../zComponents/mobile/project_component';
import List_project from '../zComponents/desktop/list_project';

const Portfolio = () => {

  useEffect(() => {
    // Animación del título
    anime({
      targets: `.${styles.titlecontainer}`,
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 1000,
      easing: 'easeOutExpo'
    });

    // Animación de los proyectos
    anime({
      targets: `.${styles.projects} .${styles.project}`,
      opacity: [0, 1],
      translateX: [-50, 0],
      delay: anime.stagger(200),  // Retrasa cada elemento de manera escalonada
      duration: 1000,
      easing: 'easeOutExpo'
    });

    // Animación para la lista de proyectos en pantallas grandes
    anime({
      targets: `.${styles.projectsList}`,
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1200,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div className={styles.portfoliowrapper}>
      <div className={styles.titlecontainer}>
        <h2>
          Portfolio
        </h2>
      </div>

      <div className={styles.projects}>
        <ProjectComponent title="Dibujo CSS" description="Realice un dibujo css" image="https://i.pinimg.com/736x/8e/c1/6a/8ec16ac6bfdf777518d13e1a7cde507d.jpg" link="https://lab04-cs-sonly-e468geh0q-irving-acostas-projects-400bd115.vercel.app/"/>
        <ProjectComponent title="UI APP IRTRA" description="Hice un app para el centro de diversiones IRTRA" image="https://i.pinimg.com/736x/4d/6e/71/4d6e71e4748061c1d0b02ed0ab649d8c.jpg" link="https://www.figma.com/proto/AMqrokozLbyUc70QCT4sqr/Irtra-experience?node-id=4-5&starting-point-node-id=3%3A684&t=pYUlRkHpRYitdwGa-1"/>
        <ProjectComponent title="Blog" description="BLOG con funcionalidades CRUD, posee una base de datos albergada en Postgres y está desarrollado con React.js" image="https://i.pinimg.com/736x/23/a2/dc/23a2dc9c4c096fe3c87a6b5e9fb3dafc.jpg" link="https://blogvirng.netlify.app/"/>
        <ProjectComponent title="SABTE" description="Colaboré junto a un equipo para desarrollar un sistema de busqueda de oficios específicos basado en una red de confianza" image='./sabte.png' link="http://34.197.54.116:777/about"/>
        <ProjectComponent title="Game of life" description="Implementación del algoritmo Conway's Game of Life con Rust" image='./conways.png' link="https://github.com/wwIrvingww/Conway-s-Game-Of-Life.git"/>
      </div>

      <div className={styles.projectsList}>
        <List_project/>
      </div>
    </div>
  );
}

export default Portfolio;
