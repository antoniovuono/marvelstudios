import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home  } from '../screens/Home';
import { SpiderMan } from "../screens/Heros/SpiderMan";

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
            name="SpiderMan"
            component={SpiderMan}
          />

    </Navigator>

    
  );
}

