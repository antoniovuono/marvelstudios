import React from 'react';
import { StatusBar } from 'react-native';
import { Plataform } from "react-native";

import Logotipo from '../../assets/images/logotipo.svg';

import {
 Container,
 Header,
 IconListIcon,
 SearchListIcon,
 HeaderContent
} from './styles';

export function Home(){
return (
  <Container> 

    <StatusBar 
     barStyle="dark-content"
     backgroundColor="transparent"
     translucent
    />

    <Header>
      <HeaderContent>
        <IconListIcon name="list" />

        <Logotipo />

        <SearchListIcon name="search"/>
      </HeaderContent>
    </Header>

      
  </Container>
  );
}