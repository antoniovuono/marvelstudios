import React from 'react';
import LottieView from 'lottie-react-native';

import loadingAnimation from '../../assets/loading.json';

import {
 Container
} from './styles';

export function LoadingAnimation(){
return (
  <Container> 
      <LottieView 
        source={loadingAnimation}
        style={{ height: 100 }}
        resizeMode="contain"
        autoPlay
        loop
      />
  </Container>
  );
}