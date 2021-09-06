import React,{ useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Load } from '../../components/Load';

import { api } from '../../services/api';
import { CharacterDTO } from '../../dtos/CharacterDTO';

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
 RaceCharacterList
} from './styles';



export function Home(){
  const[ isLoading, setIsLoading ] = useState(true);
  const [ heros, setHeros ] = useState<CharacterDTO[]>([]);
  const [ villains, setVillains ] = useState<CharacterDTO[]>([]);

  const navigation = useNavigation();
  const theme = useTheme();

  useEffect(() => {

    async function fetchHeros() {
      try {
        const response = await api.get('/heroes');
        
        setHeros(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    async function fetchVillains() {
      try {
        const response = await api.get('/villains');

        setVillains(response.data)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchHeros();
    fetchVillains();
    
  }, []);

return (
  <Container> 

    <>

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


    { isLoading ? <Load /> : 

     <PrimaryList>

            <TitleList>Heróis</TitleList>
                <RaceCharacterList

                  data={heros}
                  keyExtractor={item => item.alterEgo}
                  renderItem={({item }) => <CharsList onPress={() => navigation.navigate(item.route)}  imagePath={item.imagePath} alterEgo={item.alterEgo} name={item.name} />}

                />
                
            <TitleList>Vilões</TitleList>
                <RaceCharacterList 

                  data={villains}
                  keyExtractor={item => item.alterEgo}
                  renderItem={({item}) => <CharsList onPress={() => navigation.navigate(item.route)} imagePath={item.imagePath} alterEgo={item.alterEgo} name={item.name} />}
                
                />
               


      </PrimaryList>

      }
            
    </>
    
  </Container>
  );
}