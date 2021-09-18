import React from 'react';

import {
 Container,
 ButtonAddFavorites,
 Title
} from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

export function Button({ title, onPress, ...rest }: ButtonProps){
return (
  <Container>
      <ButtonAddFavorites onPress={onPress} {...rest}>
      <Title>{title}</Title>
      </ButtonAddFavorites>
  </Container>
  );
}