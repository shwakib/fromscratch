import React from "react";
import { StyleSheet, View, TextInput, Button } from 'react-native';
import myImage from '../../assets/images/test.jpg'

const inputPlace = props => {
    return (
        <View style={styles.inputView}>
            <TextInput placeholder='Add a Place...' style={{
                width: "80%",
                borderBottomWidth: 1,
                borderColor: "green",
                padding: 7
            }} value={props.inputValue} onChangeText={text => props.setInputValue(text)} />
            <Button title='Add' onPress={() => {
                if (props.inputValue !== "") {
                    props.setPlaceList([...props.placeList, {
                        key: Math.random().toString(), value: props.inputValue, image: {
                            uri: "https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                        }
                    }])
                    props.setInputValue("");
                }
            }
            } />
        </View>
    );
}

const styles = StyleSheet.create({
    inputView: {
        padding: 20,
        width: "60%",
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default inputPlace;