import React from "react";
import { View, Text } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import DishDetail from "./screens/DishDetail";
import MenuScreen from "./screens/MenuScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "./components/Icon";
import { useNavigation } from '@react-navigation/native';
import FavouriteDishScreen from "./screens/FavouriteDishScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#F53B50" }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerRight: () => (<Icon name="menu-sharp" color="black" size={24} iconStyle={{ paddingRight: 15 }} action={() => navigation.toggleDrawer()} />)
        }}>
            <Stack.Screen name="Main Menu" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetail} options={({ route }) => ({ title: route.params.dish.name })} />
        </Stack.Navigator>
    )
}

const FavStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#F53B50" }, headerTintColor: "#fff", headerTitleStyle: { fontWeight: "bold" }, headerRight: () => (<Icon name="menu-sharp" color="black" size={24} iconStyle={{ paddingRight: 15 }} action={() => navigation.toggleDrawer()} />)
        }}>
            <Stack.Screen name="Favourite Dish" component={FavouriteDishScreen} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MenuStack} />
            <Drawer.Screen name="Favourites" component={FavStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;