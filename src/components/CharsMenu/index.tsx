import React from 'react';
import { TouchableOpacityProps } from "react-native";

import Heros from '../../assets/images/heros.png';
import Villains from '../../assets/images/villains.png';
import AntiHeros from '../../assets/images/antiheros.png';
import Alliens from '../../assets/images/alliens.png';
import Humans from '../../assets/images/humans.png';

import {
 Container,
 HerosIcon,
} from './styles';

const iconsChar = {
    'heros': Heros,
    'villains': Villains,
    'anti-heros': AntiHeros,
    'alliens': Alliens,
    'humans': Humans
}

interface Props extends TouchableOpacityProps {
    type: 'heros' | 'villains' | 'anti-heros' | 'alliens' | 'humans';
    onPress: () => void;
}

export function CharsMenu({ type, onPress, ...rest }: Props){
return (
  <Container onPress={onPress} {...rest}> 

     
          <HerosIcon source={iconsChar[type]} />
      

  </Container>
  );
}