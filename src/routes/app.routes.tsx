import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home  } from '../screens/Home';
import { SpiderMan } from "../screens/Heros/SpiderMan";
import { BalckPanter } from "../screens/Heros/BalckPanter";
import { IronMan } from "../screens/Heros/IronMan";

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

          <Screen
          name="BlackPanter"
          component={BalckPanter}
          />

          <Screen 
          name="IronMan"
          component={IronMan}
          />

    </Navigator>

    
  );
}

