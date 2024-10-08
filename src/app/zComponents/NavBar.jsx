import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from './NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname(); // Para obtener la ruta actual
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si la barra está abierta o cerrada
  const navRef = useRef(null); // Referencia para la barra de navegación

  const toggleNavBar = () => {
    setIsOpen(!isOpen); // Cambiar el estado entre abierto y cerrado
  };

  // Cerrar la barra de navegación si se hace clic fuera de ella
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false); // Cerrar la barra de navegación
      }
    };

    // Agregar el event listener cuando el componente se monte
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <>
      {/* Icono en la esquina superior izquierda (compass.svg) */}
      <div className={styles.menuIconContainer} onClick={toggleNavBar}>
        <img src="/compass.svg" alt="Menu Icon" className={styles.compassIcon} />
      </div>

      {/* Barra de navegación */}
      <nav ref={navRef} className={`${styles.navbarContainer} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={pathname === "/" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Fabricio</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={pathname === "/about" ? `${styles.navLink} ${styles.active}` : styles.navLink}>About Me</a>
          </li>
          <li className={styles.navItem}>
            <a href="/portfolio" className={pathname === "/portfolio" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Portfolio</a>
          </li>
          <li className={styles.navItem}>
            <a href="/blog" className={pathname === "/blog" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Blog</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={pathname === "/contact" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact Me</a>
          </li>     
        </ul>
      </nav>
    </>
  );
}
