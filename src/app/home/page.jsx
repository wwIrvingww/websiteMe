"use client"
import React, { useContext } from 'react';
import styles from './Home.module.css';
import { NavBarContext } from '../zComponents/NavBarContext'; // Contexto para manejar el estado del navbar
import Landing from '../zComponents/mobile/cross_landing';

const Home = () => {
  const { toggleMenu } = useContext(NavBarContext); // Obtener la función para alternar el menú

  return (
    <div className={styles.container}>
    <Landing/>   
    </div>
  );
}

export default Home;



