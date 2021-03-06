import React from 'react';
import { Alert, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { CharacterDTO } from '../../dtos/CharacterDTO';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { MoviesList } from '../../components/MoviesList';

import AgeSvg from '../../assets/icons/age.svg';
import WeightSvg from '../../assets/icons/weight.svg';
import HeightSvg from '../../assets/icons/height.svg';
import UniverseSvg from '../../assets/icons/universe.svg';

import SkillsBars from '../../assets/images/abilitiesspider.svg';


import {
 Container,
 DetailsContent,
 NameContent,
 AlterEgo,
 Name,
 CaractContent,
 DescriptionContent,
 FirstParagrph,
 SkillsContent,
 SkillTitle,
 MoviesContent,
 MoviesScrollList,
 CaractDetailsContent,
 CaractText
} from './styles';


interface Params {
  hero: CharacterDTO;
}

export function HerosDetails() {
const route = useRoute();
const { hero } = route.params as Params;
const { user } = useAuth();
const navigation = useNavigation();

async function handleAddFavorites() {
  try {
  
  const dataKey = `@marvelstudios:favorites_${user.id}`; 
  const storagedItems = await AsyncStorage.getItem(dataKey); 
  const formattedDate = storagedItems ? JSON.parse(storagedItems) : [];
  
  const ifDataExists = formattedDate.find((item: CharacterDTO) => item.name === hero.name);

  if(!ifDataExists) {
    await AsyncStorage.setItem(`@marvelstudios:favorites_${user.id}`, JSON.stringify([...formattedDate, hero]));
  } else {
    Alert.alert('Não foi possível favoritar o personagem', 'Você já adicionou esse personagem aos favoritos');
    return;
  }

  navigation.navigate('Favorites');
    
  } catch (error) {
    console.log(error);
    Alert.alert('Não foi possível salvar o personagem como favorito!');
  }
}

return (
  <>
  <StatusBar
    barStyle="light-content"
    translucent 
    backgroundColor="transparent"
    />


      <Container source={{ uri: hero.imagePath }}> 

      <Header />

      <DetailsContent>

        <NameContent>
            <AlterEgo>{hero.alterEgo}</AlterEgo>
            <Name>{hero.name}</Name>
         </NameContent>

         <CaractContent>
           <CaractDetailsContent> 
           <AgeSvg  />
           <CaractText>{hero.caracteristics.birth}</CaractText>
           </CaractDetailsContent>

           <CaractDetailsContent> 
           <WeightSvg />
           <CaractText>{hero.caracteristics.weight.value}kg</CaractText>
           </CaractDetailsContent>

           <CaractDetailsContent> 
           <HeightSvg />
           <CaractText>{hero.caracteristics.height.value}m</CaractText>
           </CaractDetailsContent>

           <CaractDetailsContent> 
           <UniverseSvg />
           <CaractText>{hero.caracteristics.universe}</CaractText>
           </CaractDetailsContent>
         </CaractContent>


         <DescriptionContent>
           <FirstParagrph>{hero.biography}</FirstParagrph>

          
         </DescriptionContent>

         <SkillTitle>Habilidades</SkillTitle>
         <SkillsContent>
            <SkillsBars />
         </SkillsContent>

         <MoviesContent>
              <SkillTitle>Filmes</SkillTitle>

               <MoviesScrollList
                   horizontal={true}
                   showsHorizontalScrollIndicator={false}
               >

                  {
                    hero.movies.map(movies => (
                        <MoviesList
                              key={movies}
                              movies={movies} 
                        />
                    ))
                  }

            </MoviesScrollList>
              
         </MoviesContent>

         <Button title="Favoritar" onPress={handleAddFavorites} />

      </DetailsContent>
      </Container>

                
  </>
  );
}