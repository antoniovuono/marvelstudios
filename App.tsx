import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';

import { Routes } from './src/routes';



export default function App() {
  const [ fontLoaded ] = useFonts({

    'gilroy-regular': require('./src/assets/fonts/gilroy-regular.ttf'),
    'gilroy-medium': require('./src/assets/fonts/gilroy-medium.ttf'),
    'gilroy-bold': require('./src/assets/fonts/gilroy-bold.ttf'),
    'gilroy-semibold': require('./src/assets/fonts/gilroy-semibold.ttf'),
    'gilroy-heavy': require('./src/assets/fonts/gilroy-heavy.ttf'),

  });

  if(!fontLoaded) {
   return <AppLoading />
  }

  return (
    
   <ThemeProvider theme={theme}>

   <Routes />

   </ThemeProvider>
  
  );
}

