import React from 'react';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://myblog-irving-acostas-projects-400bd115.vercel.app/"
        className={styles.iframeBlog}
        style={{ overflow: 'hidden', border: 'none', margin:0 }}
      ></iframe>
    </div>
  );
}

export default Blog;
