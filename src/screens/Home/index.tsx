import React,{ useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Load } from '../../components/Load';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import { CharacterDTO } from '../../dtos/CharacterDTO';

import Logotipo from '../../assets/images/logotipo.svg';

import { CharsList } from '../../components/CharsList';
import { CharsMenu } from '../../components/CharsMenu';

import {
 Container,
 Header,
 IconList,
 LogoutIcon,
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
import { LoadingAnimation } from '../../components/LoadingAnimation';


export function Home(){
  const [ isLoading, setIsLoading ] = useState(true);
  const [ heros, setHeros ] = useState<CharacterDTO[]>([]);
  const [ villains, setVillains ] = useState<CharacterDTO[]>([]);
  const [ antiHeros, setAntiHeros ] = useState<CharacterDTO[]>([]);
  const [ alliens, setAlliens ] = useState<CharacterDTO[]>([]);
  const [ humans, setHumans ] = useState<CharacterDTO[]>([]);

  const { user, signOut } = useAuth();


  const navigation = useNavigation();
  const theme = useTheme();

  function handleHerosDetails(hero: CharacterDTO) {
    navigation.navigate("HerosDetails", {hero});
  }

  function handleFavorites() {
    navigation.navigate("Favorites");
  }

  useEffect(() => {

    async function fetchHeros() {
      try {
        const responseHeros = await api.get('/heroes');
        const responseVillains = await api.get('/villains');
        const responseAntiHeros = await api.get('/antiHeroes');
        const responseAlliens = await api.get('/aliens');
        const responseHumans = await api.get('/humans');
        
        
        setHeros(responseHeros.data);
        setVillains(responseVillains.data);
        setAntiHeros(responseAntiHeros.data);
        setAlliens(responseAlliens.data);
        setHumans(responseHumans.data);


      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchHeros();
    
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

        <ButtonIconList onPress={handleFavorites}>
        <IconList name="favorite" />
        </ButtonIconList>

        <Logotipo />

        <ButtonIconList onPress={signOut}>
        <LogoutIcon name="logout"/>
        </ButtonIconList>

      </HeaderContent>
    </Header>


    <TitlesSection>
      <SubTitle>Olá {user.name} </SubTitle>
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


    { isLoading ? <LoadingAnimation /> : 

     <PrimaryList>

            <TitleList>Heróis</TitleList>
                <RaceCharacterList

                  data={heros}
                  keyExtractor={item => item.alterEgo}
                  renderItem={({item }) => <CharsList onPress={() => handleHerosDetails(item)}  imagePath={item.imagePath} alterEgo={item.alterEgo} name={item.name} />}

                />

            <TitleList>Vilões</TitleList>
                <RaceCharacterList 
                
                  data={villains}
                  keyExtractor={ item => item.alterEgo}
                  renderItem={({ item }) => <CharsList onPress={() => handleHerosDetails(item)} imagePath={item.imagePath} alterEgo={item.alterEgo} name={item.name} />}
                
                />

            <TitleList>Anti-heróis</TitleList>

                <RaceCharacterList 

                  data={antiHeros}
                  keyExtractor={ item => item.alterEgo }
                  renderItem={({ item }) => <CharsList onPress={() => handleHerosDetails(item)} imagePath={item.imagePath} alterEgo={item.alterEgo} name={item.name} />}
                
                />
            
            <TitleList>Alienígenas</TitleList>

                <RaceCharacterList 
                
                  data={alliens}
                  keyExtractor={ item => item.alterEgo}
                  renderItem={({ item }) => <CharsList onPress={() => handleHerosDetails(item)} imagePath={item.imagePath} alterEgo={item.alterEgo} name={item.name} />}

                />

             <TitleList>Humanos</TitleList>  
                
                <RaceCharacterList 
                    
                    data={humans}
                    keyExtractor={ item => item.alterEgo}
                    renderItem={({ item }) => <CharsList onPress={() => handleHerosDetails(item)} imagePath={item.imagePath} alterEgo={item.alterEgo} name={item.name} />}

                  />
                  


      </PrimaryList>

      }
            
    </>
    
  </Container>
  );
}