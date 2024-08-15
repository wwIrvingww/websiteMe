import React from "react";
import { NextUIProvider } from '@nextui-org/react'; 
import NavBar from './zComponents/NavBar';

// overflow: 'hidden'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
      <NextUIProvider>
          {/* <NavBar /> */}
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;


