import React from 'react';
import { Menu } from '../../components/Menu';

import {
 Container,
 Title
} from './styles';

export function Home(){
return (
  <Container> 
    <Menu />

      <Title>Welcome to the marvel app!</Title>
  </Container>
  );
}