import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/Login/login';
import NavigationTab from './src/components/navigationTab/navigationTab';
import { createStackNavigator } from '@react-navigation/stack';
import Icons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { navigationRef, navigate } from './src/navigationRoot';

// const navigationref = React.createRef();
// export const navigate = (name, params) => {
//   navigationref.current && navigationref.current.navigate(name, params);
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={Store}>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={NavigationTab} options={{
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity onPress={() => {
                navigate("Login");
              }}>
                <Icons name='power-off' size={26} style={{ paddingRight: 20 }} />
              </TouchableOpacity>
            )
          }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}