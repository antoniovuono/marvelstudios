import React from 'react';
import { Home } from './src/screens/Home';

import { ThemeProvider } from "styled-components";
import theme from './src/global/styles/theme';


export default function App() {
  return (
    
   <ThemeProvider theme={theme}>

    <Home />

   </ThemeProvider>
  
  );
}

