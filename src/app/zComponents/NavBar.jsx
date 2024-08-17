"use client";
import React, { useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from './NavBar.module.css';
import { NavBarContext } from './NavBarContext';  // Importa el contexto

export default function NavBar() {
  const { menuOpen, openMenu, toggleMenu } = useContext(NavBarContext);  // Obtén `openMenu` y `toggleMenu` del contexto
  const pathname = usePathname();
  const menuRef = useRef(null);

  // Cierra el menú al hacer clic fuera de él
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggleMenu();
    }
  };

  // Abre el menú cuando el mouse pasa por el borde izquierdo
  const handleMouseEnter = () => {
    openMenu();  // Utiliza la función openMenu del contexto
  };

  // Cierra el menú cuando el mouse sale de la barra lateral
  const handleMouseLeave = () => {
    toggleMenu();
  };

  return (
    <div className={styles.navbarContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
        <ul ref={menuRef} className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
          <li className={styles.navItem}>
            <a href="/" className={pathname === "/" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={pathname === "/about" ? `${styles.navLink} ${styles.active}` : styles.navLink}>About me</a>
          </li>
          <li className={styles.navItem}>
            <a href="/blog" className={pathname === "/blog" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Blog</a>
          </li>
          <li className={styles.navItem}>
            <a href="/portfolio" className={pathname === "/portfolio" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Portfolio</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact" className={pathname === "/contact" ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
