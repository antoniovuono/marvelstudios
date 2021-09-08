import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home  } from '../screens/Home';
import { HerosDetails } from "../screens/HerosDetails";

const { Navigator, Screen} = createStackNavigator();

export function AppRoutes(){
return (

    <Navigator
    headerMode="none"
    >
          <Screen 
            name="Home"
            component={Home}
          />

          <Screen 
            name="HerosDetails"
            component={HerosDetails}
          />


    </Navigator>

    
  );
}

