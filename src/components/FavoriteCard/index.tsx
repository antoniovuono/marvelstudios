import React from 'react';
import { FontAwesome, FontAwesome5,  MaterialIcons, Ionicons } from '@expo/vector-icons';

import {
 Container,
 Content,
 ContentImage,
 ImageCharacter,
 DetailsContent,
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
          resizeMode="stretch"
          
          />
        </ContentImage>

        <DetailsContent>
          <Name>{name}</Name>
          <AlterEgo>{alterEgo}</AlterEgo>

          <InfosContent>

            <CaractContnet>
              <FontAwesome name="birthday-cake" size={20} color="black" />
              <Age>{age}</Age>
            </CaractContnet>

            <CaractContnet>
              <FontAwesome5 name="weight" size={20} color="black" />
              <Weight>{weight}kg</Weight>
            </CaractContnet>

            <CaractContnet>
              <MaterialIcons name="height" size={20} color="black" />
              <Height>{height}m</Height>
            </CaractContnet>

            <CaractContnet>
             <Ionicons name="earth" size={20} color="black" />   
              <Universe>{universe}</Universe>
            </CaractContnet>

          </InfosContent>

        </DetailsContent>

      

    </Content>

  </Container>
  );
}