import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
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
