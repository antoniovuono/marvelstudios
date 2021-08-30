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

export const DetailsList = styled.ScrollView`

   background-color: ${({theme}) => theme.colors.secondary_background};
   margin-top: ${RFValue(217)}px;
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

    width: 100%;
    height: 65px;

    flex-direction: row;
    justify-content: space-between;

   padding: 24px;
`;


