import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            initialRouteName="Splash"
        >   
            <Screen 
                name="Splash"
                component={Splash}
            />
            <Screen
                name="SignIn"
                component={SignIn}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Navigator>
    );
}