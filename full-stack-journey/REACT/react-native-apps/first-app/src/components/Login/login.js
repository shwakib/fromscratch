import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../images/home.jpg';

const Login = props => {
    const [authStates, setAuthStates] = useState({
        mode: "login", inputs: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const switchViews = () => {
        setAuthStates({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : "login"
        })
    }
    let confirmPasswordField = null;
    if (authStates.mode === "signup") {
        confirmPasswordField = (
            <TextInput placeholder="Confirm Password" value={authStates.inputs.confirmPassword} style={Styles.inputStyles} />
        )
    }
    return (
        <ImageBackground source={backgroundImage} style={{ width: "100%", flex: 1 }} blurRadius={5}>
            <View style={Styles.loginView}>
                <TouchableOpacity style={{ ...Styles.btnContainer, backgroundColor: "#1167b1", width: "80%", paddingVertical: 5 }} onPress={() => switchViews()}>
                    <Text style={Styles.btnStyle}>{authStates.mode === "login" ? "Switch to Sign Up" : "Switch to Login"}</Text>
                </TouchableOpacity>
                <TextInput placeholder="Your Email Address" value={authStates.inputs.email} style={Styles.inputStyles} />
                <TextInput placeholder="Password" value={authStates.inputs.password} style={Styles.inputStyles} />
                {confirmPasswordField}
                <TouchableOpacity style={Styles.btnContainer}>
                    <Text style={Styles.btnStyle}>{authStates.mode === "login" ? "Login" : "Sign Up"}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
        alignSelf: "center",
        paddingVertical: 8
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