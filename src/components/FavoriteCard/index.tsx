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
 Description,
} from './styles';

export function FavoriteCard(){
return (
  <Container> 

    <Content>

        <ContentImage>
          <ImageCharacter 
          source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628877008/marvelstudios/characters/iron-man_cfxmw9.png' }} 
          
          />
        </ContentImage>

        <DetailsContent>
          <Name>Homem de Ferro</Name>
          <AlterEgo>Tony Stark</AlterEgo>

          <InfosContent>

            <CaractContnet>
              <FontAwesome name="birthday-cake" size={20} color="red" />
              <Description>1970</Description>
            </CaractContnet>

            <CaractContnet>
              <FontAwesome5 name="weight" size={20} color="red" />
              <Description>78kg</Description>
            </CaractContnet>

            <CaractContnet>
              <MaterialIcons name="height" size={20} color="red" />
              <Description>1.80m</Description>
            </CaractContnet>

            <CaractContnet>
             <Ionicons name="earth" size={20} color="red" />   
              <Description>Terra</Description>
            </CaractContnet>

          </InfosContent>

        </DetailsContent>

        <IconContent>
          <IconFavorite 
             name="trash" 
             size={30} 
          />
        </IconContent>

    </Content>

  </Container>
  );
}