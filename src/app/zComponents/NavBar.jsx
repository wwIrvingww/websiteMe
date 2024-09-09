import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from './NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname(); // Para obtener la ruta actual
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si la barra está abierta o cerrada

  const toggleNavBar = () => {
    setIsOpen(!isOpen); // Cambiar el estado entre abierto y cerrado
  };

  return (
    <>
      {/* Icono en la esquina superior izquierda (compass.svg) */}
      <div className={styles.menuIconContainer} onClick={toggleNavBar}>
        <img src="/compass.svg" alt="Menu Icon" className={styles.compassIcon} />
      </div>

      {/* Barra de navegación */}
      <nav className={`${styles.navbarContainer} ${isOpen ? styles.open : ''}`}>
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
            <a href="/contact" className={pathname === "/contact" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact Me</a>
          </li>
          <li className={styles.navItem}>
            <a href="/blog" className={pathname === "/blog" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Blog</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
