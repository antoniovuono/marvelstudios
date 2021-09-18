import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`

   width: 100%;
   padding: 5px 20px;

   margin-bottom: ${getBottomSpace() + 10}px;
  
`;

export const ButtonAddFavorites = styled(RectButton)`

    background-color: ${({theme}) => theme.colors.primary_title};
    width: 100%;
    height: 55px;

    border-radius: 20px;

    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.primary_background};
    font-family: 'gilroy-bold';
    font-size: ${RFValue(15)}px;

`;