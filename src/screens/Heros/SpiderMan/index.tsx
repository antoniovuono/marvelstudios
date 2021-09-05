import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import { CharacterDTO } from '../../../dtos/CharacterDTO';
import { api } from '../../../services/api';


import { Header } from '../../../components/Header';
import { MoviesList } from '../../../components/MoviesList';

import AgeSvg from '../../../assets/icons/age.svg';
import WeightSvg from '../../../assets/icons/weight.svg';
import HeightSvg from '../../../assets/icons/height.svg';
import UniverseSvg from '../../../assets/icons/universe.svg';

import SkillsBars from '../../../assets/images/abilitiesspider.svg';


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
 MoviesFlatList 
} from './styles';



export function SpiderMan() {
 const [movies, setMovies] = useState<CharacterDTO[]>([]);

useEffect(() => {

  async function fetechMovies() {
    const response = await api.get('/heroes');
    setMovies(response.data);
    console.log(response);
  }

  fetechMovies();

}, []);

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
            <Name>Homem Aranha</Name>
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

             
              
             

         </MoviesContent>

      </DetailsContent>

           
      </Container>
  </>
  );
}