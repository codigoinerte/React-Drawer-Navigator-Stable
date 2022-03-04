import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { StackNavigator } from './src/navigator/StackNavigator';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex:1 }}>
        <DrawerNavigator />
      </View>
    </NavigationContainer>
  )
}

export default App;
