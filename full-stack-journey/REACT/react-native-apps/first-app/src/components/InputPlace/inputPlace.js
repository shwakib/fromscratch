import React from "react";
import { StyleSheet, View, TextInput, Button } from 'react-native';
import myImage from '../../../assets/images/test.jpg'

const inputPlace = props => {
    return (
        <View style={styles.inputView}>
            <TextInput placeholder='Name of the Place...' style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "green",
                padding: 7
            }} value={props.inputValue} onChangeText={text => props.setInputValue(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputView: {
        padding: 20,
        width: "100%",
        marginTop: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default inputPlace;