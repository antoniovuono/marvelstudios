import React, { useEffect } from 'react';
import LogoSvg from '../../assets/images/logotipo.svg';

import Animated, 
{ 
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
    withTiming,
    runOnJS,
 } from 'react-native-reanimated';

import {
 Container
} from './styles';
import { useNavigation } from '@react-navigation/core';

export function Splash(){
const splashAnimation = useSharedValue(0);
const navigation = useNavigation();

const brandStyle = useAnimatedStyle(() => {
    return {
        opacity: interpolate(splashAnimation.value,
            [0, 25, 50],
            [0, .3, 1]
        ),
        transform: [
            {
                translateX: interpolate(splashAnimation.value,
                    [0, 50],
                    [-50, 0],
                    Extrapolate.CLAMP
                    )
            }
        ]
    }
});

function startApp() {
    navigation.navigate("SignIn");
}

useEffect(() => {
    splashAnimation.value = withTiming(
        50,
        { duration: 2000},
        () => {
            'worklet'
            runOnJS(startApp)();
        }
    );
}, []);

return (
  <Container> 
   <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <LogoSvg width={150} height={110} />
   </Animated.View> 
  </Container>
  );
}