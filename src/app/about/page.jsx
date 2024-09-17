'use client'
import React, { useEffect } from 'react';
import styles from './AboutMe.module.css';
import anime from 'animejs';
import CParagraph from './CParagraph';
import NParagraph from './NParagraph';

const AboutMe = () => {

  useEffect(() => {
    // Animación del texto sobre la imagen de cabecera
    anime({
      targets: `.${styles.overlayText}`,
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1000,
      easing: 'easeOutExpo'
    });

    // Animación de la imagen de cabecera
    anime({
      targets: `.${styles.contactImage}`,
      opacity: [0, 1],
      translateX: [-100, 0],
      delay: 500,
      duration: 1500,
      easing: 'easeOutExpo'
    });

    // Animación del título
    anime({
      targets: `.${styles.title}`,
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1500,
      easing: 'easeOutExpo'
    });

    // Animación de los párrafos
    anime({
      targets: `.${styles.paragraphItem}`,
      opacity: [0, 1],
      translateY: [50, 0],
      delay: anime.stagger(300), // Retraso en cascada para cada párrafo
      duration: 1500,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <div className={styles.containerAbout}>
      {/*Header Image */}
      <div className={styles.headerContainer}>
        <div className={styles.overlayTextContainer}>
          <p className={styles.overlayText}>Let me talk...</p>
        </div>
        <div className={styles.contactImageContainer}>
          <img
            src="https://i.pinimg.com/736x/6f/58/87/6f58875204d87f535eb17badd7bed1a8.jpg"
            alt="Contact Image"
            className={styles.contactImage}
          />
        </div>
      </div>

      {/*Header Title*/}
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.lineBreak}>ABOUT</span>
          <span className={styles.lineBreak}>ME</span>
        </h2>
      </div>

      {/*Header Right Image*/}
      <div className={styles.headerRightContainer}>
        <div className={styles.verticalTextContainer}>
          <p className={styles.overlayVertcialText}>Nice to</p>
        </div>
        <div className={styles.overlayRightTextContainer}>
          <p className={styles.overlayRightText}>meet you!</p>
        </div>
        <div className={styles.contactRightImageContainer}>
          <img
            src="https://i.pinimg.com/736x/6f/58/87/6f58875204d87f535eb17badd7bed1a8.jpg"
            alt="Contact Image"
            className={styles.contacRightImage}
          />
        </div>
      </div>

      {/* Horizontal Scrollable Paragraphs */}
      <div className={styles.scrollContainer}>
        <div className={styles.paragraphWrapper}>
          <div className={styles.paragraphItem}>
            <CParagraph />
          </div>

          <div className={styles.paragraphItem}>
            <NParagraph 
              subtitle="Sobre mi alivio" 
              content={`El diseño UI/UX fue para mí la luz que iluminó mi camino y ahora es la lámpara que me ayuda a caminar. 
              Sin embargo esto aún no es suficiente para mí, me gusta seguir creciendo, agregando piezas a mi rompecabezas para 
              convertirme cada vez más en una persona más completa.

              Desarrollar mis propios diseños fue una pieza esencial para completar mi rompecabezas porque de esa manera me aseguro 
              de que hasta el más mínimo detalle esté correctamente implementado.

              No solo me concentro en resolver mis problemas, me gusta ayudar a cualquier que lo necesite y hacerlo sentir participe 
              de la solución.`}
            />
          </div>

          <div className={styles.paragraphItem}>
            <NParagraph 
              subtitle="Acerca del silencio" 
              content={`Por lo general soy una persona silenciosa, no me gusta el ruido y si no tengo nada que decir me quedo callado. 
              No me gusta hablar por mis proyectos, prefiero que ellos lo hagan por mí y no me gusta llamar la atención de forma escandalosa, 
              prefiero hacerlo de una manera más sigilosa, elegante.

              Uno de los pilares en mi vida es la diferencia, es el camino que siempre tomo, porque me gusta resaltar y creo que esta es 
              la mejor manera de hacerlo. Mis proyectos, mi forma de vestir, mi trabajo, en todo siempre apunto a no ser como el resto.`}
            />
          </div>

          <div className={styles.paragraphItem}>
            <NParagraph 
              subtitle="Dentro de mi casa" 
              content={`Fuera del ámbito profesional, la actividad física forma una parte esencial de mi vida, con la natación y el tenis 
              como mis deportes favoritos. En cuanto a la música, Mon Laferte ocupa un lugar especial en mi lista de reproducción.

              Disfruto de la literatura, tanto escribirla como leerla, ya que después de todo somos las historias que nos contamos. 
              No todos lo saben, pero también tengo un gran interés en la industria de la moda, así que es probable que algún día entre 
              a ese campo.

              Oscar Wilde dijo que sea yo mismo porque los demás puestos están ocupados y eso es lo que haré hasta el día de mi muerte.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
