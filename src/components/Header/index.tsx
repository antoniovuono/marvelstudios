import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
 Container,
 ArrowIcon,
 BackButton
} from './styles';


export function Header(){
const navigation = useNavigation();
return (
  <Container> 
    
    <BackButton onPress={() => navigation.navigate('Home')}>
    <ArrowIcon name="arrow-left" />
    </BackButton>

  </Container>
  );
}