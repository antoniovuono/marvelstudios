import React from 'react';
import { StatusBar } from 'react-native';

import { Header } from '../../../components/Header';

import {
 Container,

} from './styles';


export function RedSkrull() {
return (
  <>
  <StatusBar
    barStyle="light-content"
    translucent 
    backgroundColor="transparent"
    />


      <Container source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628949990/red-skull_e6gtui.png' }}> 

      <Header />

    

           
      </Container>
  </>
  );
}