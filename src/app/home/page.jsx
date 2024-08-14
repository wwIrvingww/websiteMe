import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.vertical_line}></div>
      <div className={styles.horizontal_line}></div>
      <div className={styles.title_container}>
        <h1>FABRICIO</h1>
      </div>
      <div className={styles.designer_container}>
        <h2>Web Developer</h2>
      </div>
      <div className={styles.ux_container}>
        <h2>UX/UI Designer</h2>
      </div>
      <div className={styles.image_container}>
        <img src={'https://i.pinimg.com/564x/c2/88/5b/c2885bb7d30c39a67dadc71a52d167fe.jpg'} alt="Portrait 1" />
        <img src={'https://i.pinimg.com/564x/c2/88/5b/c2885bb7d30c39a67dadc71a52d167fe.jpg'} alt="Portrait 2" />
      </div>
      <div className={styles.shape_container}> 
        <img src='./Shape1.png' alt='Shape 1'/>  {/* Asegúrate de usar <img> en lugar de <image> */}
      </div>
    </div>
  );
}

export default Home;
