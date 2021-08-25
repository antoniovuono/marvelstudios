import React from 'react';

import {
 Container,
 CardCharacter,
 BackgroundImage,
 Details,
 AlterEgo,
 Name,
} from './styles';

interface CharData {
    alterEgo: string;
    name: string;
    imagePath: string;
}

interface Props {
    data: CharData
}

export function CharsList({ data }: Props){
return (
 
  <Container> 
      
      <CardCharacter>

          <BackgroundImage
           source={{ uri: data.imagePath }} 
           /> 


          <Details>
          <AlterEgo>{data.alterEgo}</AlterEgo>
          <Name>{data.name}</Name>
          </Details>

    

      </CardCharacter>

  </Container>

  );
}