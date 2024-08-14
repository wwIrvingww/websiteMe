import React from "react";
import { NextUIProvider } from '@nextui-org/react';  // Importa el provider de NextUI
import NavBar from './zComponents/NavBar';


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, overflow: 'hidden' }}>
      <NextUIProvider>
          {/* <NavBar /> */}
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;


