"use client"
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from './NavBar.module.css';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  // Cierra el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Abre el menú cuando el mouse pasa por el borde izquierdo
  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  // Cierra el menú cuando el mouse sale de la barra lateral
  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.navbarContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.brand}>
          <a href="#" className={styles.brandName}>ACME</a>
        </div>
        <ul ref={menuRef} className={`${styles.navList} ${menuOpen ? styles.open : ""}`}>
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
