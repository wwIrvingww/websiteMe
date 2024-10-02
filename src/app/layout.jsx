"use client"
import React from "react";
import { NextUIProvider } from '@nextui-org/react'; 
import NavBar from './zComponents/NavBar';
import { NavBarProvider } from './zComponents/NavBarContext'; // Importa el provider
import './globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* Metaetiquetas de OpenGraph */}
        <meta property="og:title" content="Fabricio Site" />
        <meta property="og:description" content="Soy UX/UI Designer y Fronted Developer." />
        <meta property="og:image" content="https://i.pinimg.com/736x/2e/57/2b/2e572b65b187080a49a38eec4bb4ce59.jpg" />
        <meta property="og:url" content="https://www.fabricio.my/" />
        <meta property="og:type" content="website" />
        
        {/* Metaetiquetas para Twitter */}

        <title>Fabricio Site</title>
      </head>
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
