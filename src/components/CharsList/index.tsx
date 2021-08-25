import React from 'react';
import { ImageProps } from 'react-native';

import {
 Container,
 CardCharacter,
 BackgroundImage,
 Details,
 AlterEgo,
 Name,
} from './styles';


interface CharDataProps {
    alterEgo: string;
    name: string;
    imagePath: string;
}


export function CharsList({ alterEgo, name, imagePath }: CharDataProps){
return (
 
  <Container> 
      
      <CardCharacter>

          <BackgroundImage
           source={{ uri: imagePath }} 
           /> 


          <Details>
          <AlterEgo>{alterEgo}</AlterEgo>
          <Name>{name}</Name>
          </Details>

    

      </CardCharacter>

  </Container>

  );
}