import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { FavoriteCard } from '../../components/FavoriteCard';

import {
 Container,
 Header,
 Content,
 Title,
 GoBackButton,
 IconGoBack,
 FavoriteIcon,
 FavoritesContent
} from './styles';

export function Favorites(){
const navigation = useNavigation();

function handleGoBack() {
  navigation.goBack();
}

return (
  <Container> 

    <Header>
      <Content>

          <GoBackButton onPress={handleGoBack}>
              <IconGoBack 
                    name="arrow-left" 
                    size={26}
                />
          </GoBackButton>
        
          <Title>Favoritos</Title>

          <FavoriteIcon
             name="favorite"
             size={26}
             />
      </Content>
    </Header>

    <FavoritesContent>
      <FavoriteCard />
    </FavoritesContent>

  </Container>
  );
}