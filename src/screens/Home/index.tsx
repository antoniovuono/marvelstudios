import React,{ useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';


import Logotipo from '../../assets/images/logotipo.svg';

import { CharsList } from '../../components/CharsList';
import { CharsMenu } from '../../components/CharsMenu';

import  dataList  from "../../utils/application.json";

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
 RaceCharacterList,
} from './styles';

interface CharacterProps {
  alterEgo: string;
  name: string;
  imagePath: string;
  route: string;
}


export function Home(){
  const [ heros, setHeros ] = useState<CharacterProps[]>([]);

  const navigation = useNavigation();

  
  function loadHerosData() {
    const herosFormated = dataList.heroes.map((item: CharacterProps) => {

          return {
            alterEgo: item.alterEgo,
            name: item.name,
            imagePath: item.imagePath,
            route: item.route
          }
    });

    console.log(herosFormated);
    setHeros(herosFormated);
  }

  useEffect(() => {
    loadHerosData();
  }, []);

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

    <PrimaryList>

    <TitleList>Heróis</TitleList>

    <RaceCharacterList

      data={heros}
      keyExtractor={item => item.alterEgo}
      renderItem={({item }) => <CharsList onPress={() => navigation.navigate(item.route)}  imagePath={item.imagePath} alterEgo={item.alterEgo} name={item.name} />}

    />


    </PrimaryList>

      
  </Container>
  );
}