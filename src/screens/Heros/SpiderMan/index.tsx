import React from 'react';
import { StatusBar } from 'react-native';

import { Header } from '../../../components/Header';

import AgeIcon from '../../../assets/icons/age.svg';
import WeightIcon from '../../../assets/icons/weight.svg';
import HeightIcon from '../../../assets/icons/height.svg';
import UniverseIcon from '../../../assets/icons/universe.svg';

import {
 Container,
 DetailsContent,
 TitleContent,
 AlterEgo,
 Name,
 CaracteristicsContent,

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

       <TitleContent>
         <AlterEgo>  Peter Parker</AlterEgo>
         <Name> Homem {`\n`} Aranha</Name>
       </TitleContent>

       <CaracteristicsContent>
      
           <AgeIcon   />
           <WeightIcon />
           <HeightIcon />
           <UniverseIcon />

       </CaracteristicsContent>


     </DetailsContent>

  </Container>
  </>
  );
}