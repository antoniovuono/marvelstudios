import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home  } from '../screens/Home';
import { SpiderMan } from "../screens/Heros/SpiderMan";
import { BlackPanter } from "../screens/Heros/BlackPanter";
import { IronMan } from "../screens/Heros/IronMan";
import { RedSkrull } from "../screens/Villains/RedSkrull";
import { DrDestiny } from "../screens/Villains/DrDestiny";
import { GreenElf } from "../screens/Villains/GreenElf";

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
          component={BlackPanter}
          />

          <Screen 
          name="IronMan"
          component={IronMan}
          />

          <Screen 
          name="RedSkrull"
          component={RedSkrull}
          />

          <Screen 
          name="DrDestiny"
          component={DrDestiny}
          />

          <Screen 
          name="GreenElf"
          component={GreenElf}
          />

    </Navigator>

    
  );
}

