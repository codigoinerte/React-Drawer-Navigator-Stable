import React from 'react'
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { Screen3 } from '../screens/Screen3';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const StackNavigator = () => {
  return (

<Drawer.Navigator>
    <Drawer.Screen name="Screen1" component={Screen1} />
    <Drawer.Screen name="Screen2" component={Screen2} />
    <Drawer.Screen name="Screen3" component={Screen3} />
</Drawer.Navigator>
  );
}