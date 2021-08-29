import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const Title = styled.Text`

   font-family: 'gilroy-heavy';
   font-size: 35px;
   color: ${({theme}) => theme.colors.primary_title }

`; 