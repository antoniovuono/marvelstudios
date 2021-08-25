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


export function CharsList({ alterEgo, name, imagePath, ...rest }: CharDataProps){
return (
 
  <Container> 
      
      <CardCharacter {...rest}>

          <BackgroundImage
           source={{ uri: imagePath }} 
           resizeMode="contain"
           /> 


          <Details>
          <AlterEgo>{alterEgo}</AlterEgo>
          <Name>{name}</Name>
          </Details>

    

      </CardCharacter>

  </Container>

  );
}