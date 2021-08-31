import React from 'react';
import { StatusBar } from 'react-native';

import { Header } from '../../../components/Header';

import AgeSvg from '../../../assets/icons/age.svg';
import WeightSvg from '../../../assets/icons/weight.svg';
import HeightSvg from '../../../assets/icons/height.svg';
import UniverseSvg from '../../../assets/icons/universe.svg';

import StrenghtBars from '../../../assets/images/strengthbars.svg';
import IntelligenceBars from '../../../assets/images/intelligencebars.svg';
import AgillityBars from '../../../assets/images/agillitybars.svg';
import EnduranceBars from '../../../assets/images/endurancebars.svg';
import VelocityBars from '../../../assets/images/velocitybars.svg';


import {
 Container,

} from './styles';


export function IronMan() {
return (
  <>
  <StatusBar
    barStyle="light-content"
    translucent 
    backgroundColor="transparent"
    />


      <Container source={{ uri: 'https://res.cloudinary.com/didxdzbfe/image/upload/v1628877008/iron-man_cfxmw9.png' }}> 

      <Header />

    

           
      </Container>
  </>
  );
}