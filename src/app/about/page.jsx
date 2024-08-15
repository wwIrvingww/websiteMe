import React from 'react';
import styles from './AboutMe.module.css';
import CParagraph from './CParagraph';
import NParagraph from './NParagraph';

const AboutMe = () => {
  return (
    <div className={styles.container_about}>
      {/* Contenedor para la imagen izquierda y el texto */}
      <div className={styles.limage_container}>
        <div className={styles.limage_about}>
          <img src={'https://i.pinimg.com/564x/c6/65/ba/c665badb4b8a0d8903daa5038748b179.jpg'} alt={'image left'}/>
        </div>
        <div className={styles.limage_text}>
          <h4>Let me talk...</h4>
        </div>
      </div>

      {/* Contenedor para el título */}
      <div className={styles.title_container}>
        <div className={styles.title_about}>
          <h1>ABOUT</h1>
        </div>
        <div className={styles.title_me}>
          <h1>ME</h1>
        </div>
      </div>

      {/* Contenedor para la imagen derecha y el texto */}
      <div className={styles.rimage_container}>
        <div className={styles.rimage_about}>
          <img src={'https://i.pinimg.com/564x/c6/65/ba/c665badb4b8a0d8903daa5038748b179.jpg'} alt={'image right'}/>
        </div>
        <div className={styles.rimage_text}>
          <h4>Nice to meet you!</h4>
        </div>
      </div>

      {/* Agregando CParagraph debajo de la limage */}
      <div className={styles.cparagraph_container}>
        <CParagraph />
      </div>
      
      {/* Primer NParagraph */}
      <div className={styles.nparagraph_container}>
        <NParagraph subtitle="Subtitle Goes Here" content="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages." />
      </div>

      {/* Segundo NParagraph con contenido diferente */}
      <div className={styles.nparagraph_container_right}>
        <NParagraph subtitle="Different Subtitle" content="This is the content of the second NParagraph. It has different text and is positioned to the right of the first paragraph." />
      </div>

      {/* Tercer NParagraph a la derecha del segundo */}
      <div className={styles.nparagraph_container_further_right}>
        <NParagraph subtitle="Another Subtitle" content="This is the content of the third NParagraph, positioned to the right of the second NParagraph. It continues the layout from left to right." />
      </div>
    </div>

  );
}

export default AboutMe;
