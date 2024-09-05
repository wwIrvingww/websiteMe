"use client"
import React, { useContext } from 'react';
import styles from './Home.module.css';
import { NavBarContext } from '../zComponents/NavBarContext'; // Contexto para manejar el estado del navbar
import Landing from '../zComponents/mobile/cross_landing';

const Home = () => {
  const { toggleMenu } = useContext(NavBarContext); // Obtener la función para alternar el menú

  return (
    <div className={styles.container}>
      {/* <div className={styles.vertical_line}></div>
      <div className={styles.horizontal_line}></div>
      <div className={styles.title_container}>
        <h1 className={styles.title_link} onClick={toggleMenu}>FABRICIO</h1>
      </div>
      <div className={styles.designer_container}>
        <h2>Web Developer</h2>
      </div>
      <div className={styles.ux_container}>
        <h2>UX/UI Designer</h2>
      </div>
      <div className={styles.image_container}>
        <img src={'./portrait.png'} alt="Portrait 1" />
        <img src={'./portrait.png'} alt="Portrait 2" />
      </div>
      <div className={styles.shape_container}> 
        <img src='./Shape1.png' alt='Shape 1'/> 
      </div> */}

    <Landing/>

      
    </div>
  );
}

export default Home;



