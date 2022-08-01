import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import backgroundImage from '../images/home.jpg';
import { trySignup, tryLogin } from "../../redux/actionCreators";
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        trySignup: (email, password, switchViews) => dispatch(trySignup(email, password, switchViews)),
        tryLogin: (email, password, navigateProps) => dispatch(tryLogin(email, password, navigateProps))
    }
}

const Login = props => {
    const [authStates, setAuthStates] = useState({
        mode: "login", inputs: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const isFocused = useIsFocused();

    useEffect(() => {
        setAuthStates({
            ...authStates,
            inputs: {
                email: '',
                password: '',
                confirmPassword: ''
            }
        })
    }, [isFocused])

    const switchViews = () => {
        setAuthStates({
            ...authStates,
            mode: authStates.mode === "login" ? "signup" : "login",
            inputs: {
                email: '',
                password: '',
                confirmPassword: ''
            }
        })
    }

    const updateInput = (value, name) => {
        setAuthStates({
            ...authStates,
            inputs: {
                ...authStates.inputs,
                [name]: value,
            }
        })
    }

    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const handleAuthValidation = () => {
        const email = authStates.inputs.email;
        const password = authStates.inputs.password;
        const confirmPassword = authStates.inputs.confirmPassword;

        if (email !== "" && password !== "") {
            if (re.test(email)) {
                if (authStates.mode === "login") {
                    props.tryLogin(email, password, props.navigation.navigate);
                } else {
                    if (password === confirmPassword) {
                        props.trySignup(email, password, switchViews);
                    }
                    else {
                        alert("Password does not match");
                    }
                }
            }
            else {
                alert("Invalid Email");
            }
        }
        else {
            alert("Please Input all the fields!")
        }
    }

    let confirmPasswordField = null;
    if (authStates.mode === "signup") {
        confirmPasswordField = (
            <TextInput placeholder="Confirm Password" value={authStates.inputs.confirmPassword} style={Styles.inputStyles} onChangeText={value => updateInput(value, "confirmPassword")} secureTextEntry={true} />
        )
    }
    return (
        <ImageBackground source={backgroundImage} style={{ width: "100%", flex: 1 }} blurRadius={5}>
            <View style={Styles.loginView}>
                <TouchableOpacity style={{ ...Styles.btnContainer, backgroundColor: "#1167b1", width: "80%", paddingVertical: 5 }} onPress={() => switchViews()}>
                    <Text style={Styles.btnStyle}>{authStates.mode === "login" ? "Switch to Sign Up" : "Switch to Login"}</Text>
                </TouchableOpacity>
                <TextInput placeholder="Your Email Address" value={authStates.inputs.email} style={Styles.inputStyles} onChangeText={value => updateInput(value, "email")} />
                <TextInput placeholder="Password" value={authStates.inputs.password} style={Styles.inputStyles} onChangeText={value => updateInput(value, "password")} secureTextEntry={true} />
                {confirmPasswordField}
                <TouchableOpacity style={Styles.btnContainer} onPress={() => handleAuthValidation()}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);