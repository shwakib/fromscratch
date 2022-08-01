import React from "react";
import { View, Text, Button } from 'react-native';

const MenuScreen = props => {
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button title="Press" onPress={() => { props.navigation.navigate("Dish Detail") }} />
        </View>
    )
}

export default MenuScreen;