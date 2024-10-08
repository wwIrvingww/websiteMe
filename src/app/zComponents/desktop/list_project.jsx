'use client'
import React, { useState, useRef, useEffect } from 'react';
import './list_project.css';
import Project from './project';
import anime from 'animejs';

const List_project = () => {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const listRef = useRef(null);

  const titles = [
    "Dibujo CSS",
    "UI APP IRTRA",
    "Blog",
    "SABTE",
    "Game of life"
  ];

  // Animar títulos solo una vez al cargar el componente
  useEffect(() => {
    anime({
      targets: listRef.current.querySelectorAll('.title'),
      opacity: [0, 1],
      translateX: [-20, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(100) // Animación escalonada para cada título
    });
  }, []); // Ejecutar solo una vez

  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  const handleClick = (title) => {
    const details = {
      "Dibujo CSS": "https://lab04-cs-sonly-e468geh0q-irving-acostas-projects-400bd115.vercel.app/",
      "UI APP IRTRA": "https://www.figma.com/proto/AMqrokozLbyUc70QCT4sqr/Irtra-experience?node-id=4-5&starting-point-node-id=3%3A684&t=pYUlRkHpRYitdwGa-1",
      "Blog": "https://blogvirng.netlify.app/",
      "SABTE": "http://34.197.54.116:777/about",
      "Game of life": "https://github.com/wwIrvingww/Conway-s-Game-Of-Life.git"
    };

    const link = details[title];
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className='list-container' ref={listRef}>
      <div className='left-side'>
        {titles.map((title, index) => (
          <div
            key={index}
            className='title'
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(title)} /* Evento onClick para redirigir */
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
  );
};

const ProjectDetail = ({ title }) => {
  const details = {
    "Dibujo CSS": {
      date: "April 2024",
      p1: "Realicé un dibujo únicamente aplicando estilos CSS.",
      image: "https://i.pinimg.com/736x/8e/c1/6a/8ec16ac6bfdf777518d13e1a7cde507d.jpg",
      p2: "Además, cuenta con un diseño adaptativo e implementé animaciones y música de fondo.",
      link: "https://lab04-cs-sonly-e468geh0q-irving-acostas-projects-400bd115.vercel.app/"
    },
    "UI APP IRTRA": {
      date: "March 2024",
      p1: "Desarrollé una aplicación UI para el centro de diversiones IRTRA.",
      image: "https://i.pinimg.com/736x/4d/6e/71/4d6e71e4748061c1d0b02ed0ab649d8c.jpg",
      p2: "El diseño incluye características avanzadas y una experiencia de usuario amigable.",
      link: "https://www.figma.com/proto/AMqrokozLbyUc70QCT4sqr/Irtra-experience?node-id=4-5&starting-point-node-id=3%3A684&t=pYUlRkHpRYitdwGa-1"
    },
    "Blog": {
      date: "February 2024",
      p1: "Desarrollé un blog con funcionalidades CRUD utilizando React y una base de datos Postgres.",
      image: "https://i.pinimg.com/736x/23/a2/dc/23a2dc9c4c096fe3c87a6b5e9fb3dafc.jpg",
      p2: "El blog permite la creación, actualización y eliminación de publicaciones.",
      link: "https://blogvirng.netlify.app/"
    },
    "SABTE": {
      date: "January 2024",
      p1: "Colaboré junto a un equipo para desarrollar un sistema de búsqueda de trabajo",
      image: "./sabte.png",
      p2: "El sistema se basa en una red de confianza para conectar profesionales.",
      link: "http://34.197.54.116:777/about"
    },
    "Game of life": {
      date: "December 2023",
      p1: "Implementé el algoritmo Conway's Game of Life usando Rust.",
      image: "./conways.png",
      p2: "Este proyecto es una visualización interactiva del famoso juego de la vida.",
      link: "https://github.com/wwIrvingww/Conway-s-Game-Of-Life.git"
    }
  };

  const projectData = details[title];
  const projectRef = useRef(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 700) {
      anime({
        targets: projectRef.current.querySelectorAll('.detail-element'),
        opacity: [0, 1],
        scale: [0.8, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: anime.stagger(100) // Retraso en cascada de cada elemento
      });
    }
  }, [title]);

  return (
    <div className='detail' ref={projectRef}>
      <div className='detail-element'>
        <Project 
          date={projectData.date}
          p1={projectData.p1}
          image={projectData.image}
          p2={projectData.p2}
          link={projectData.link}
        />
      </div>
    </div>
  );
};

export default List_project;
