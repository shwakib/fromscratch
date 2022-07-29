import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Login = props => {
    const [authStates, setAuthStates] = useState({
        mode: "login", inputs: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    })
    return (
        <View style={Styles.loginView}>
            <TextInput placeholder="Your Email Address" value={authStates.inputs.email} style={Styles.inputStyles} />
            <TextInput placeholder="Password" value={authStates.inputs.password} style={Styles.inputStyles} />
            <TextInput placeholder="Confirm Password" value={authStates.inputs.confirmPassword} style={Styles.inputStyles} />
            <TouchableOpacity style={Styles.btnContainer}>
                <Text style={Styles.btnStyle}>{authStates.mode === "login" ? "Login" : "Sign Up"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    loginView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    inputStyles: {
        width: "80%",
        padding: 5,
        marginTop: 10,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#009688",
        borderRadius: 4
    },
    btnStyle: {
        fontSize: 16,
        color: "#fff",
        alignSelf: "center"
    },
    btnContainer: {
        flexDirection: "row",
        width: 150,
        paddingVertical: 5,
        backgroundColor: "#009688",
        borderRadius: 5,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Login;