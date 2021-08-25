import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from "react-native";

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.primary_background};
`;

export const Header = styled.View`

   width: 100%;
   height: 64px;

   background-color: ${({theme}) => theme.colors.primary_background};
   justify-content: flex-start;

   padding: 24px 26px;

   margin-top: ${Platform.OS === 'android' ? 15 : 35}px;
`;

export const HeaderContent = styled.View`

      flex-direction: row;
      align-items: center;
      justify-content: space-between;
     
`;

export const IconList = styled(Feather)`

   color: ${({theme}) => theme.colors.dark};
   font-size: ${RFValue(24)}px;

`;

export const ButtonIconList = styled.TouchableOpacity``;

export const SearchListIcon = styled(Feather)`

   color: ${({theme}) => theme.colors.dark}; 
   font-size: ${RFValue(24)}px;
`;

export const TitlesSection = styled.View`

   width: 100%;

   background-color: ${({theme}) => theme.colors.primary_background};

   padding: 0 24px;
   margin-top: ${RFValue(24)}px;

`;

export const SubTitle = styled.Text`

   font-family: 'gilroy-semibold';
   font-size: ${RFValue(14)}px;
   color: ${({theme}) => theme.colors.secondary_title};

`;

export const Title = styled.Text`

   font-family: 'gilroy-heavy';
   font-size: ${RFValue(32)}px;
   margin-top: ${RFValue(8)}px;

   color: ${({theme}) => theme.colors.dark};

`;

export const CharsMenuSection = styled.View`

   width: 100%;
   flex-direction: row;

   margin-top: ${RFValue(32)}px;
  
`;

export const PrimaryList = styled.ScrollView`
   margin-top: ${RFValue(25)}px;

`;

export const TitleList = styled.Text`

   font-family: 'gilroy-bold';
   font-size: ${RFValue(18)}px;
   color: ${({theme}) => theme.colors.primary_title};

   padding: 0 24px;

`;
