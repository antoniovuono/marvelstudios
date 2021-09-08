import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import {  getStatusBarHeight } from 'react-native-iphone-x-helper';
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

   background-color: ${({theme}) => theme.colors.secondary_background};

   margin-top: ${RFValue(245)}px;


`;

export const NameContent = styled.View`

      padding: 20px;


`;

export const AlterEgo = styled.Text`

   color: ${({theme}) => theme.colors.primary_background};
   font-size: ${RFValue(16)}px;
   font-family: 'gilroy-medium';

`;

export const Name = styled.Text`

   color: ${({theme}) => theme.colors.primary_background};
   font-size: ${RFValue(40)}px;  
   font-family: 'gilroy-heavy';

   margin-top: 10px;

`;

export const CaractContent = styled.View`

   flex-direction: row;
   justify-content: space-between;

   align-items: center;

   padding: 20px;

`;

export const CaractDetailsContent = styled.View`

   align-items: center;
   justify-content: center;

`;

export const CaractText = styled.Text`

   font-family: 'gilroy-medium';
   font-size: ${RFValue(12)}px;
   color: ${({theme}) => theme.colors.primary_background};

   margin-top: 15px;

`;

export const DescriptionContent = styled.View`

   padding: 20px;

`;

export const FirstParagrph = styled.Text`

   color: ${({theme}) => theme.colors.primary_background};
   font-size: ${RFValue(14)}px;
   font-family: 'gilroy-medium';

   text-align: justify;


`;

export const SecondParagrp = styled.Text`

   color: ${({theme}) => theme.colors.primary_background};
   font-size: ${RFValue(14)}px;
   font-family: 'gilroy-medium';

   text-align: justify;

   margin-top: 20px;

`;

export const SkillTitle = styled.Text`

   color: ${({theme}) => theme.colors.primary_background};
   font-size: ${RFValue(18)}px;
   font-family: 'gilroy-bold'; 

   padding: 24px;

`;


export const SkillsContent = styled.View`

   align-items: center;

`;

export const MoviesContent = styled.View`


      width: 100%;
     

`;

export const  MoviesScrollList = styled.ScrollView`


`;
