"use client"
import React from "react";
import { NextUIProvider } from '@nextui-org/react'; 
import NavBar from './zComponents/NavBar';
import { NavBarProvider } from './zComponents/NavBarContext'; // Importa el provider
import './globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: '100vh', overflow: 'scroll', scrollbarWidth: 'none' }}>
        <NextUIProvider>
          <NavBarProvider> {/* Envuelve la app con el provider */}
            <NavBar />
            <main>{children}</main>
          </NavBarProvider>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;