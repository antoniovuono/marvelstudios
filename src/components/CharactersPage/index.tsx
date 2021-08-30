import React from 'react';

import {
 Container,
 TitleConttent,
 AlterEgo,
 Name,
} from './styles';

export function CharactersPage(){
return (
  <Container> 

      <TitleConttent>
      <AlterEgo>  Peter Parker</AlterEgo>
      <Name> Homem {`\n`} Aranha</Name>
      </TitleConttent>


  </Container>
  );
}