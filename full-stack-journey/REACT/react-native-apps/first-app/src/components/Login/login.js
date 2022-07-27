import React from "react";
import { View, Text, Button } from 'react-native';

const Login = props => {
    return (
        <View>
            <Text>
                Login Screen
            </Text>
            <Button title="Login" onPress={() => { props.navigation.navigate("Home") }} />
        </View>
    )
}

export default Login;