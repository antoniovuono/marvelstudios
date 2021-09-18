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
      <FavoriteCard 
          imagePath={'https://res.cloudinary.com/didxdzbfe/image/upload/v1628877008/marvelstudios/characters/iron-man_cfxmw9.png'}
          name="Homem de Ferro"
          alterEgo="Tony Stark"
          age="1970"
          weight="85kg"
          height="1.80"
          universe="Terra"
          onPress={() => {}}
      />
    </FavoritesContent>

  </Container>
  );
}