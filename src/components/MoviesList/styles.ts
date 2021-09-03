import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   width: 100%;
   margin-left: 22px;
`;

export const BackgroundImage  = styled.Image`

      height: ${RFValue(230)}px;
      width: ${RFValue(140)}px;

      border-radius: 15px;

`;