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

export const DetailsList = styled.ScrollView`

   width: 100%;
   background-color: ${({theme}) => theme.colors.secondary_background};
   opacity: 0.65;
   margin-top: ${RFValue(225)}px;

 
`;

export const TitleConttent = styled.View`

    padding: 23px 23px;

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

    margin-top: 8px;

`;

export const CaracteristicsConent = styled.View`


    height: 65px;

    flex-direction: row;
    justify-content: space-between;

    padding: 24px;
`;

export const DescriptionContent = styled.View`

   padding: 20px;
   height: 200px;

   margin-top: 24px;

`;

export const FirstParagraph = styled.Text`

   font-size: ${RFValue(14)}px;
   font-family: 'gilroy-medium';
   color: ${({theme}) => theme.colors.primary_background};
   text-align: justify;
`;

export const SecondParagraph = styled.Text`

   font-size: ${RFValue(14)}px;
   font-family: 'gilroy-medium';
   color: ${({theme}) => theme.colors.primary_background};
   margin-top: 20px;
   text-align: justify;
`;

export const SkillsContent = styled.View`

   width: 100%;
   margin-top: 25px;


`;

export const SkillsTitle = styled.Text`


   font-size: ${RFValue(18)}px;
   font-family: 'gilroy-bold';
   color: ${({theme}) => theme.colors.primary_background};

`;


export const TitleContent = styled.View`

   width: 30%;
   padding: 0 24px;
   margin-top: 15px;

`;


export const Title = styled.Text`

   font-size: ${RFValue(12)}px;
   font-family: 'gilroy-regular';
   color: ${({theme}) => theme.colors.primary_background};

`;


export const IconContent = styled.View`

   width: 70%;
   margin-top: 15px;


`;


export const StrenghtContent = styled.View`

   flex-direction: row;

`;
