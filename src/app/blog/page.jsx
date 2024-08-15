import React from 'react';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div>
      <iframe
        src="https://myblog-irving-acostas-projects-400bd115.vercel.app/"
        className={styles.iframeBlog}
        style={{ width: '100vw', height: '100vh' }} // Inyectando el ancho y alto directamente
      ></iframe>
    </div>
  );
}

export default Blog;
