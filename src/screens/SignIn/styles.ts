import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
`;

export const Header = styled.View`

   width: 100%;
   height: 60%;

   background-color: ${({theme}) => theme.colors.primary_background};

   align-items: center;
   justify-content: center;

`;

export const Title = styled.Text`

   font-family: 'gilroy-medium';
   font-size: ${RFValue(25)}px;

   text-align: center;

   margin-top: 40px;

   color: ${({theme}) => theme.colors.secondary_background};

`;

export const SignInTitle = styled.Text`

   font-family: 'gilroy-regular';
   font-size: ${RFValue(16)}px;

   text-align: center;
   margin-top: 80px;

   color: ${({theme}) => theme.colors.secondary_background};

`;

export const Footer = styled.View`

   width: 100%;
   height: 40%;

   background-color: ${({theme}) => theme.colors.primary_title};

`;
