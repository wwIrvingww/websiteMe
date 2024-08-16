import React from 'react';
import styles from './nparagraph.module.css';

const NParagraph = ({ subtitle, content }) => {
  return (
    <div className={styles.paragraph_container}>
      <h2>{subtitle}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  );
}

export default NParagraph;
