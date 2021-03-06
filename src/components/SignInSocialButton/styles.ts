import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Button = styled(RectButton)`
   height: ${RFValue(56)}px;
   background-color: ${({theme}) => theme.colors.shape};
   border-radius: 5px;

   margin-top: ${Platform.OS === 'android' ? 50 : 15}px;

   align-items: center;

   flex-direction: row;
`;

export const ImageContainer = styled.View`

    height: 100%;
    justify-content: center;
    align-items: center;

    padding: ${RFValue(16)}px;

    border-color: ${({theme}) => theme.colors.secondary_title};
    border-right-width: 1px;

`;

export const Text = styled.Text`

    flex: 1;
    text-align: center;

    font-size: ${RFValue(14)}px;
    font-family: 'gilroy-bold';

    color: ${({theme}) => theme.colors.secondary_background};
`;
