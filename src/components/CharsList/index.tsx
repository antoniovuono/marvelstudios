import React from 'react';

import {
 Container,
 CardCharacter,
 BackgroundImage,
 Details,
 AlterEgo,
 Name,
} from './styles';

export function CharsList(){
return (
 
  <Container> 
      
      <CardCharacter>

          <BackgroundImage source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628876294/spider-man_s79dx6.png' }} /> 


          <Details>
          <AlterEgo>Peter Parker</AlterEgo>
          <Name>Homem Aranha</Name>
          </Details>

    

      </CardCharacter>

  </Container>

  );
}