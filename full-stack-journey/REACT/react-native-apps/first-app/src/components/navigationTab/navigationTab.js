import React from "react";
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SharePlaces from "../SharePlaces/SharePlaces";
import FindPlaces from "../FindPlaces/FindPlaces";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const NavigationTab = props => {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Find Places" component={FindPlaces} options={{ tabBarIcon: ({ color, size }) => (<Icon name="md-map" color={color} size={size} />) }} />
            <Tab.Screen name="Share Places" component={SharePlaces} options={{ tabBarIcon: ({ color, size }) => (<Icon name="arrow-redo-sharp" color={color} size={size} />) }} />
        </Tab.Navigator>
    )
}

export default NavigationTab;