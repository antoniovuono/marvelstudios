import React from 'react';
import { StatusBar } from 'react-native';

import Logotipo from '../../assets/images/logotipo.svg';

import {
 Container,
 Header,
 IconList,
 SearchListIcon,
 ButtonIconList,
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

        <ButtonIconList onPress={() => {}}>
        <IconList name="list" />
        </ButtonIconList>

        <Logotipo />

        <ButtonIconList onPress={() => {}}>
        <SearchListIcon name="search"/>
        </ButtonIconList>

      </HeaderContent>
    </Header>

      
  </Container>
  );
}