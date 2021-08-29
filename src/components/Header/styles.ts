import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
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

export const BackButton= styled.TouchableOpacity``;

