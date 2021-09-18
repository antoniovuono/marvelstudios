import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   width: 100%;
   height: 140px;
   background-color: ${({ theme }) => theme.colors.primary_background};

   border: 1px solid ${({ theme }) => theme.colors.secondary_background};

   border-radius: 20px;
`;

export const Content = styled.View`

      flex-direction: row;
      justify-content: space-between;
`;

export const ContentImage = styled.View`

   width: 30%;
   height: 100%;


`;

export const ImageCharacter = styled.Image`

      width: 100%;
      height: 100%;

      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;

`;

export const DetailsContent = styled.View`

   padding: 10px;

`;

export const Name = styled.Text`

   font-family: 'gilroy-bold';
   font-size: ${RFValue(15)}px;
   color: ${({ theme }) => theme.colors.primary_title};
   

`;

export const AlterEgo = styled.Text`

   font-family: 'gilroy-bold';
   font-size: ${RFValue(12)}px;
   color: ${({ theme }) => theme.colors.secondary_background};

   margin-top: 5px;

`;


export const InfosContent = styled.View`

   flex-direction: row;
   height: 80px;


`;

export const CaractContnet = styled.View`

      align-items: center;
      padding: 5px 6px;
      justify-content: flex-end;

`;


export const Age = styled.Text`


   font-family: 'gilroy-regular';
   font-size: ${RFValue(10)}px;
   margin-top: 5px;

   color: ${({ theme }) => theme.colors.secondary_background};

`;

export const Weight = styled.Text`



   font-family: 'gilroy-regular';
   font-size: ${RFValue(10)}px;
   margin-top: 5px;

   color: ${({ theme }) => theme.colors.secondary_background};

`;

export const Height = styled.Text`

   font-family: 'gilroy-regular';
   font-size: ${RFValue(10)}px;
   margin-top: 5px;

   color: ${({ theme }) => theme.colors.secondary_background};


`;

export const Universe = styled.Text`

   font-family: 'gilroy-regular';
   font-size: ${RFValue(10)}px;
   margin-top: 5px;

   color: ${({ theme }) => theme.colors.secondary_background};

`;




export const IconContent = styled.TouchableOpacity`

   align-items: center;
   justify-content: center;

   padding: 24px;

`;

export const IconFavorite = styled(FontAwesome)`

   color: ${({ theme }) => theme.colors.primary_title};

`;


