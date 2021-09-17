import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home  } from '../screens/Home';
import { HerosDetails } from "../screens/HerosDetails";
import { Favorites } from "../screens/Favorites";

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

          <Screen 
            name="Favorites"
            component={Favorites}   
          />


    </Navigator>

    
  );
}

