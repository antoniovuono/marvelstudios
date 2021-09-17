import React from 'react';

import {
 Container,
 Header,
 Content,
 Title,
 IconGoBack,
 FavoriteIcon,
} from './styles';

export function Favorites(){
return (
  <Container> 

    <Header>
      <Content>
        
            <IconGoBack 
                name="arrow-left" 
                size={26}
            />
 

          <Title>Favoritos</Title>

          <FavoriteIcon
             name="favorite"
             size={26}
             />
      </Content>
    </Header>

  </Container>
  );
}