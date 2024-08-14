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

    </div>
  );
}

export default Home;
