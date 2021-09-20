import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
      flex: 1;
      background-color: ${({theme}) => theme.colors.primary_background};
`;

export const Header = styled.View`

   width: 100%;
   height: 120px;

   justify-content: center;

   margin-top: ${getStatusBarHeight() + 4}px;

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

export const GoBackButton = styled.TouchableOpacity``;

export const IconGoBack = styled(Feather)``;


export const FavoriteIcon = styled(MaterialIcons)`

   color: ${({ theme }) => theme.colors.primary_title};

`;

export const FavoritesContent = styled.View`
   flex: 1;
   width: 100%;
   padding: 0 24px;

`;

export const Description = styled.Text`

   font-size: ${RFValue(14)}px;
   font-family: 'gilroy-bold';
   color: ${({ theme }) => theme.colors.primary_title};
   margin-bottom: 10px;

`;