import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login/login';
import NavigationTab from './src/components/navigationTab/navigationTab';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationref } from './src/navigationRef/navigatorRef'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationref}>
      <Provider store={Store}>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={NavigationTab} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}