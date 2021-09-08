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
 SecondParagrp,
 SkillsContent,
 SkillTitle,
 MoviesContent,
 MoviesScrollList 
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


      <Container source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628876294/marvelstudios/characters/spider-man_s79dx6.png' }}> 

      <Header />

      <DetailsContent>

        <NameContent>
            <AlterEgo>Peter Parker</AlterEgo>
            <Name>Homem Aranhas</Name>
         </NameContent>


         <CaractContent>
           <AgeSvg />
           <WeightSvg />
           <HeightSvg />
           <UniverseSvg />
         </CaractContent>


         <DescriptionContent>
           <FirstParagrph>
           Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, 
           é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma 
           aranha radioativa em uma exposição científica e adquire a agilidade e a força
            proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade
             de andar nas paredes e tetos.
           </FirstParagrph>

           <SecondParagrp>
           Através de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o 
           permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas 
           habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela 
           de televisão.
           </SecondParagrp>
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