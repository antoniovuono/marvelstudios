import React, { useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavoriteCard } from '../../components/FavoriteCard';
import { CharacterDTO } from '../../dtos/CharacterDTO';
import { FlatList } from 'react-native-gesture-handler';

import {
 Container,
 Header,
 Content,
 Title,
 GoBackButton,
 IconGoBack,
 FavoriteIcon,
 FavoritesContent,
 Description
} from './styles';
import { Load } from '../../components/Load';
import { useAuth } from '../../hooks/auth';


export function Favorites(){
const [favorites, setFavorites] = useState<CharacterDTO[]>([]);
const [ loading, setLoading ] = useState(true);
const navigation = useNavigation();

const { user } = useAuth();

function handleGoBack() {
  navigation.goBack();
}

async function loadFavorites() {
    const dataKey = `@marvelstudios:favorites_${user.id}`;
    const storagedItems = await AsyncStorage.getItem(dataKey);
    const favorites = storagedItems ? JSON.parse(storagedItems) : [];
    
    setFavorites(favorites);
    setLoading(false);
}



useEffect(() => {
  loadFavorites();
}, []);

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
      <Description> Você tem {favorites.length} personagens favoritados </Description>
      { loading ? <Load /> :
            <FlatList 
              data={favorites}
              keyExtractor={ item => item.name}
              renderItem={ ({item}) => (
                      <FavoriteCard 
                          imagePath={item.imagePath}
                          name={item.name}
                          alterEgo={item.alterEgo}
                          age={item.caracteristics.birth}
                          weight={item.caracteristics.weight.value}
                          height={item.caracteristics.height.value}
                          universe={item.caracteristics.universe}
                          onPress={() => {}}
                      />
              )}
                showsVerticalScrollIndicator={false}
            />

        }
    </FavoritesContent>

  </Container>
  );
}