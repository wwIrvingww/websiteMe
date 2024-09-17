import React, { useEffect, useState } from 'react';
import './cross_landing.css'; // External CSS file for styles

const Landing = () => {
    const [linesLoaded, setLinesLoaded] = useState(false); // Controla el estado de las líneas
    const [contentLoaded, setContentLoaded] = useState(false); // Controla el despliegue del contenido

    useEffect(() => {
        const horizontalLine = document.querySelector('.horizontal-line');
        const verticalLine = document.querySelector('.vertical-line');
        let linesCompleted = 0;

        // Función para verificar si ambas líneas han terminado la animación
        const onLineLoaded = () => {
            linesCompleted += 1;
            if (linesCompleted === 2) {
                setLinesLoaded(true); // Cuando ambas líneas terminen, cambia el estado
                setTimeout(() => {
                    setContentLoaded(true); // Despliega el contenido después
                }, 100); // Retraso adicional si es necesario
            }
        };

        // Escuchar el fin de la transición de ambas líneas
        horizontalLine.addEventListener('transitionend', onLineLoaded);
        verticalLine.addEventListener('transitionend', onLineLoaded);

        // Iniciar las animaciones de las líneas después de un pequeño retraso
        setTimeout(() => {
            horizontalLine.style.transform = 'translateX(0)';
            verticalLine.style.transform = 'translateY(0)';
        }, 100); // Puedes ajustar el retraso

        // Limpiar event listeners cuando el componente se desmonte
        return () => {
            horizontalLine.removeEventListener('transitionend', onLineLoaded);
            verticalLine.removeEventListener('transitionend', onLineLoaded);
        };
    }, []);

    return (
        <div className={`landing-container ${linesLoaded ? 'lines-loaded' : ''} ${contentLoaded ? 'loaded' : ''}`}>
            {/* Horizontal line */}
            <div className="horizontal-line" />
    
            {/* Vertical line */}
            <div className="vertical-line" />
    
            {/* Title FABRICIO */}
            <div className="title-container">
                <h1 className="title">FABRICIO</h1>
            </div>
    
            {/* Images Container */}
            <div className="image-container">
                <img src={'./portrait.png'} alt="Portrait 1" className="image image1" />
                <img src={'./portrait.png'} alt="Portrait 1" className="image image2" />
            </div>
    
            {/* Job Titles */}
            <div className="job-titles">
                <h2 className="job-title">Web Developer</h2>
                <h2 className="job-title">UX/UI Designer</h2>
            </div>

            <div className="shape_container"> 
                <img src='./Shape1.png' alt='Shape 1'/> 
            </div>
        </div>
    );
};

export default Landing;
