import React from 'react';
import { StatusBar } from 'react-native';

import { Header } from '../../../components/Header';

import {
 Container,

} from './styles';


export function DrDestiny() {
return (
  <>
  <StatusBar
    barStyle="light-content"
    translucent 
    backgroundColor="transparent"
    />


      <Container source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628950033/green-goblin_c8czoy.png' }}> 

      <Header />

    

           
      </Container>
  </>
  );
}