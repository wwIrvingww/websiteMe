import React from 'react';
import styles from './cparagraph.module.css';

const CParagraph = () => {
  return (
    <div className={styles.paragraph_container}>
      <p>
        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.<br />
        <br />
        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
      </p>
    </div>
  );
}

export default CParagraph;
