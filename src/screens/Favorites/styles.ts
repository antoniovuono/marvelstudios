import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
      flex: 1;
      background-color: ${({theme}) => theme.colors.primary_background};
`;

export const Header = styled.View`

   width: 100%;
   height: 200px;

   justify-content: center;

`;

export const Content = styled.View`

   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   padding: 10px 24px;
   

`;

export const Title = styled.Text`

   font-size: ${RFValue(20)}px;
   font-family: 'gilroy-heavy';
   color: ${({ theme }) => theme.colors.primary_title};

`;


export const IconGoBack = styled(Feather)``;


export const FavoriteIcon = styled(MaterialIcons)`

 

`;
