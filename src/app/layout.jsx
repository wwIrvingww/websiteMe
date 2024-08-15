import React from "react";
import { NextUIProvider } from '@nextui-org/react'; 
import NavBar from './zComponents/NavBar';

// 

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, height:'100vh'}}>
      <NextUIProvider>
          {/* <NavBar /> */}
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;


