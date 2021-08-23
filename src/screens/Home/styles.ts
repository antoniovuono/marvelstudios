import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.primary_background};
`;

export const Header = styled.View`

   width: 100%;
   height: 64px;

   background-color: ${({theme}) => theme.colors.primary_background};
   justify-content: flex-start;

   margin-top: ${RFValue(30)}px;
   padding: 24px 26px;
`;

export const HeaderContent = styled.View`

      flex-direction: row;
      align-items: center;
      justify-content: space-between;
     
`;

export const Title = styled.Text`
   font-family: 'gilroy-bold';
`;

export const IconListIcon = styled(Feather)`

   color: ${({theme}) => theme.colors.dark};
   font-size: ${RFValue(24)}px;

`;

export const SearchListIcon = styled(Feather)`

   color: ${({theme}) => theme.colors.dark}; 
   font-size: ${RFValue(24)}px;
`;
