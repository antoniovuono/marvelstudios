import React from 'react';
import { StatusBar } from 'react-native';
import { CharactersPage } from '../../../components/CharactersPage';

import { Header } from '../../../components/Header';


import {
 Container,
 DetailsList

} from './styles';


export function SpiderMan() {
return (
  <>
  <StatusBar
    barStyle="light-content"
    translucent 
    backgroundColor="transparent"
    />


      <Container source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628876294/spider-man_s79dx6.png' }}> 

      <Header />

        <DetailsList>
        <CharactersPage />

        </DetailsList>
  
      </Container>
  </>
  );
}