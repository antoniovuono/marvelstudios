import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
 Container,
 ArrowIcon,
 BackButton
} from './styles';


export function Header(){
const navigation = useNavigation();

function handleGoBack() {
  navigation.goBack();
}

return (
  <Container> 
    
    <BackButton onPress={handleGoBack}>
    <ArrowIcon name="arrow-left" />
    </BackButton>

  </Container>
  );
}