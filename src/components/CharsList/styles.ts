import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   width: 100%;

   margin-left: 22px;
  

`;

export const CardCharacter = styled.TouchableOpacity`

 
   height: ${RFValue(230)}px;
   width: ${RFValue(140)}px;

   border-radius: 15px;

   justify-content: flex-end;

`;

export const BackgroundImage = styled.Image`

   position: absolute;

   height: ${RFValue(230)}px;
   width: ${RFValue(140)}px;

   border-radius: 15px;

`;

export const  Details = styled.View`

   padding: 12px;

`;

export const AlterEgo = styled.Text`

   font-family: 'gilroy-medium';
   font-size: ${RFValue(10)}px;

   color: ${({theme}) => theme.colors.primary_background};

`;

export const Name = styled.Text`

   font-family: 'gilroy-heavy';
   font-size: ${RFValue(20)}px;

   color: ${({theme}) => theme.colors.primary_background};

`;
