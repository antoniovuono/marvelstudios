import React from 'react';
import { StatusBar } from 'react-native';

import Logotipo from '../../assets/images/logotipo.svg';

import { CharsList } from '../../components/CharsList';
import { CharsMenu } from '../../components/CharsMenu';

import {
 Container,
 Header,
 IconList,
 SearchListIcon,
 ButtonIconList,
 HeaderContent,
 TitlesSection,
 SubTitle,
 Title,
 CharsMenuSection,
 PrimaryList,
 TitleList,
} from './styles';

export function Home(){
  const charData = {
    alterEgo: 'Peter Parker',
    name: 'Homem Aranha',
    imagePath: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628876294/spider-man_s79dx6.png'
  }

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


    <TitlesSection>

      <SubTitle>Bem vindo ao Marvel Heroes</SubTitle>
      <Title>Escolha o seu personagem</Title>

    </TitlesSection>

    <CharsMenuSection>
       <CharsMenu type="heros" onPress={() => {}}/>
       <CharsMenu type="villains" onPress={() => {}}/>
       <CharsMenu type="anti-heros" onPress={() => {}}/>
       <CharsMenu type="alliens" onPress={() => {}}/>
       <CharsMenu type="humans" onPress={() => {}}/>
    </CharsMenuSection>

    <PrimaryList
       horizontal={true}
    >
      
     

      <CharsList data={charData}/>


    </PrimaryList>

      
  </Container>
  );
}