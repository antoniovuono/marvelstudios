import React from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { CharacterDTO } from '../../dtos/CharacterDTO';

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
                  <MoviesList movies={ "https://res.cloudinary.com/didxdzbfe/image/upload/v1630639549/marvelstudios/movies/captain-america-3_ik0fsu.jpg" } />
                  <MoviesList movies={ "https://res.cloudinary.com/didxdzbfe/image/upload/v1630639486/marvelstudios/movies/spider-man-homecoming_ad0z4d.jpg" } />
                  <MoviesList movies={ "https://res.cloudinary.com/didxdzbfe/image/upload/v1630639486/marvelstudios/movies/spider-man-homecoming_ad0z4d.jpg"} />
                  <MoviesList movies={ "https://res.cloudinary.com/didxdzbfe/image/upload/v1630639486/marvelstudios/movies/spider-man-homecoming_ad0z4d.jpg" } />
                  <MoviesList movies={ "https://res.cloudinary.com/didxdzbfe/image/upload/v1630639486/marvelstudios/movies/spider-man-homecoming_ad0z4d.jpg" } />
            
              </MoviesScrollList>

         </MoviesContent>

      </DetailsContent>

           
      </Container>
  </>
  );
}