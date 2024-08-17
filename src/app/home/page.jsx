import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.vertical_line}></div>
      <div className={styles.horizontal_line}></div>
      <div className={styles.title_container}>
        <a href="/about" className={styles.title_link}>
          <h1>FABRICIO</h1>
        </a>
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
      </div>
    </div>
  );
}

export default Home;
