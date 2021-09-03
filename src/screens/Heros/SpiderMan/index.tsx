import React from 'react';
import { StatusBar } from 'react-native';

import { Header } from '../../../components/Header';

import AgeSvg from '../../../assets/icons/age.svg';
import WeightSvg from '../../../assets/icons/weight.svg';
import HeightSvg from '../../../assets/icons/height.svg';
import UniverseSvg from '../../../assets/icons/universe.svg';

import StrenghtBars from '../../../assets/images/strengthbars.svg';
import IntelligenceBars from '../../../assets/images/intelligencebars.svg';
import AgillityBars from '../../../assets/images/agillitybars.svg';
import EnduranceBars from '../../../assets/images/endurancebars.svg';
import VelocityBars from '../../../assets/images/velocitybars.svg';


import {
 Container,
 DetailsContent,
 NameContent,
 AlterEgo,
 Name,
 CaractContent,
 DescriptionContent,
 FirstParagrph,
 SecondParagrp
} from './styles';


export function SpiderMan() {
return (
  <>
  <StatusBar
    barStyle="light-content"
    translucent 
    backgroundColor="transparent"
    />


      <Container source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628876294/spider-man_s79dx6.png' }}> 

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
           Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade e a força proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade de andar nas paredes e tetos.
           </FirstParagrph>

           <SecondParagrp>
           Através de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela de televisão.
           </SecondParagrp>

         
         </DescriptionContent>

      </DetailsContent>

    

           
      </Container>
  </>
  );
}