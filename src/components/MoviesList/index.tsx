import React from 'react';

import {
 Container,
 BackgroundImage 
} from './styles';

interface Props {
  movies: string;
}

export function MoviesList({ movies }: Props){
return (
  <Container> 

    <BackgroundImage 

      source={{ uri: movies}}
      resizeMode="contain"
    />

  </Container>
  );
}