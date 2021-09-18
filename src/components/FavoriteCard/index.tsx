import React from 'react';
import { FontAwesome, FontAwesome5,  MaterialIcons, Ionicons } from '@expo/vector-icons';

import {
 Container,
 Content,
 ContentImage,
 ImageCharacter,
 DetailsContent,
 IconContent,
 IconFavorite,
 Name,
 AlterEgo,
 InfosContent,
 CaractContnet,
 Age,
 Weight,
 Height,
 Universe,
} from './styles';

interface FavoritesProps {
  imagePath: string;
  name: string;
  alterEgo: string;
  age: string;
  weight: string;
  height: string;
  universe: string;
  onPress: () => void;
}

export function FavoriteCard({ 
  imagePath,
  name,
  alterEgo,
  age,
  weight,
  height,
  universe,
  onPress,
  ...rest
 }: FavoritesProps){
return (
  <Container> 

    <Content>

        <ContentImage>
          <ImageCharacter 
          source={{uri: imagePath} }
          
          />
        </ContentImage>

        <DetailsContent>
          <Name>Homem de Ferro</Name>
          <AlterEgo>Tony Stark</AlterEgo>

          <InfosContent>

            <CaractContnet>
              <FontAwesome name="birthday-cake" size={20} color="black" />
              <Age>1970</Age>
            </CaractContnet>

            <CaractContnet>
              <FontAwesome5 name="weight" size={20} color="black" />
              <Weight>78kg</Weight>
            </CaractContnet>

            <CaractContnet>
              <MaterialIcons name="height" size={20} color="black" />
              <Height>1.80m</Height>
            </CaractContnet>

            <CaractContnet>
             <Ionicons name="earth" size={20} color="black" />   
              <Universe>Terra</Universe>
            </CaractContnet>

          </InfosContent>

        </DetailsContent>

        <IconContent onPress={onPress} {...rest}>
          <IconFavorite 
             name="trash" 
             size={30} 
          />
        </IconContent>

    </Content>

  </Container>
  );
}