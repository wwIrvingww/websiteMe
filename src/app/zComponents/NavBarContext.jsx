"use client"
import { createContext, useState } from 'react';

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openMenu = () => setMenuOpen(true);  // Función para abrir el menú

  return (
    <NavBarContext.Provider value={{ menuOpen, toggleMenu, openMenu }}>
      {children}
    </NavBarContext.Provider>
  );
};
