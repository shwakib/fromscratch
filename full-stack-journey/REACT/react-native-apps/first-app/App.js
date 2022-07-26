import 'react-native-gesture-handler';
import React, { useState } from 'react';
import MainComponent from './src/mainComponent';
import { Provider } from 'react-redux';
import Store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login/login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}