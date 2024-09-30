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
          <p className={styles.overlayText}>Puedes ver mi CV acá ↓</p>
        </div>
        <div className={styles.contactImageContainer}>
        <a href="/CV-Fabricio.pdf" download target="_blank" rel="noopener noreferrer">
          { <img
            src="https://i.pinimg.com/736x/6f/58/87/6f58875204d87f535eb17badd7bed1a8.jpg"
            alt="Contact Image"
            className={styles.contactImage}
          /> }
          <div className={styles.cvContainer}>
          curriculum
          </div>
          </a>
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
          <p className={styles.overlayVertcialText}>¡Ve mi vídeo!</p>
        </div>
        <div className={styles.overlayRightTextContainer}>
          <p className={styles.overlayRightText}>¡Ve mi vídeo!</p>
        </div>
        <div className={styles.contactRightImageContainer}>
        <iframe src="https://www.youtube.com/embed/PQlG1gznMBE?si=01qbtbDaf3BqPszu&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          {/* <img
            src="https://i.pinimg.com/736x/6f/58/87/6f58875204d87f535eb17badd7bed1a8.jpg"
            alt="Contact Image"
            className={styles.contacRightImage}
          /> */}
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
              subtitle="Sobre mí en el diseño UX/UI" 
              content={`En el tercer año de mi carrera cursé la clase Human Computer Interaction (HCI), en la cual aprendí las bases del diseño UI y UX. Durante el semestre llevamos a cabo tres rediseños y el desarrollo (en versión prototipo) de una app completamente libre. 
                Aprendí sobre temas como teoría del color, los principios de gestalt, realización de prototipos y otros temas que fueron de gran valor para mi formación. 
                Después de concluir este semestre he procurado practicar mis habilidades como UX designer en proyectos realizados en otras clases, asegurándome de desarrollar no solo interfaces estéticas, sino también funcionales. Además, he ampliado mis conocimientos con lecturas como “Don’t make me think” de Steve Krug y “The design of everyday things” de Donald Norman.`.replace('Después de concluir', '<br />Después de concluir') }
            />
          </div>

          <div className={styles.paragraphItem}>
            <NParagraph 
              subtitle="Mi día a día" 
              content={`Mi enfoque comienza con una escucha activa de las expectativas del cliente, ya que muchas veces ellos tienen una visión general, pero carecen de detalles específicos sobre el diseño. Desde la concepción inicial de una página web, ya sea un sitio informativo o una plataforma de comercio electrónico, mi responsabilidad es asegurarme de que cada elemento sea funcional y estéticamente atractivo. Ofrezco servicios que abarcan desde la ideación y el wireframing hasta el desarrollo completo de la interfaz, utilizando herramientas como Figma para la creación de prototipos.`}
            />
          </div>

          <div className={styles.paragraphItem}>
          <NParagraph 
          subtitle="Enfoque en Diseño Web" 
          content={`En términos de habilidades técnicas, manejo HTML, CSS y JavaScript, así como frameworks como React y Next (este sitio está hecho con Next), lo que me permite construir sitios responsivos que se adaptan a diversas plataformas. 
          Mi papel implica una combinación de empatía y comunicación efectiva, donde la capacidad de entender las inquietudes del cliente y traducirlas en soluciones concretas es fundamental. La habilidad para adaptarme a diferentes perspectivas y trabajar en equipo es esencial para lograr resultados que superen las expectativas, creando un ambiente donde la creatividad y la funcionalidad se entrelazan.`.replace('Mi papel implica', '<br />Mi papel implica')}
          />

          </div>
          <div className={styles.paragraphItem}>
          <a href="/CV-Fabricio.pdf" download target="_blank" rel="noopener noreferrer">
              <NParagraph 
                subtitle="Descargar CV" 
                content={``}
              />
            </a>
          </div>
          <div className={styles.paragraphItem}>
              <NParagraph 
                subtitle="¡Ve mi vídeo!" 
                content={``}
              />
          </div>


          <div className={styles.videoContainer}>
          <iframe src="https://www.youtube.com/embed/PQlG1gznMBE?si=01qbtbDaf3BqPszu&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
