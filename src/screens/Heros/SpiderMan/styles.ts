import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ImageBackground`
   flex: 1;

`;

export const Header = styled.View`

   width: 100%;
   height: 64px;

   justify-content: center;

   padding: 20px 24px;

   margin-top: ${getStatusBarHeight() + 14}px;
`;

export const ArrowIcon = styled(Feather)`

   color: ${({theme}) => theme.colors.primary_background};
   font-size: ${RFValue(24)}px;
`;


export const DetailsContent = styled.ScrollView`

   width: 100%;
   margin-top: ${RFValue(195)}px;

`;

 
export const TitleContent = styled.View`

   width: 100%;
   height: ${RFValue(116)}px;

   padding: 0 24px;
  
`;

 
export const AlterEgo = styled.Text`

   color: ${({theme}) => theme.colors.primary_background};
   font-size: ${RFValue(16)}px;
   margin-bottom: 8px;

`;

 
export const Name = styled.Text`

   color: ${({theme}) => theme.colors.primary_background};  
   font-size: ${RFValue(40)}px;
   font-family: 'gilroy-heavy';

   
`;

export const CaracteristicsContent = styled.View`

   width: 100%;
   flex-direction: row;

   justify-content: space-between;

   padding: 24px 24px;

   background-color: ${({theme}) => theme.colors.secondary_background};
   opacity: 0.7;

   margin-top: 59px;
`;





