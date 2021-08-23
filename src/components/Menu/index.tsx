import React from 'react';

import {
 Container,
 IconList,
 Logotipo,
 IconSearch,
} from './styles';

export function Menu(){
return (
  <Container> 

      <IconList />

      <Logotipo source={require('../../assets/images/logotipo.png')} />

      <IconSearch />
          

  </Container>
  );
}