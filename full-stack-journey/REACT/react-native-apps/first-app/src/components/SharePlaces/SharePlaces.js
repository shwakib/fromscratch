import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import InputPlace from '../InputPlace/inputPlace';
import { connect } from 'react-redux';
import { addPlace, deletePlace } from '../../redux/actionCreators';
import PickImage from "../PickImage/pickImage";

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place))
    }
}

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState(""); //State defined
    return (
        <View>
            <PickImage />
            <InputPlace
                inputValue={inputValue} setInputValue={setInputValue} />
            <View style={{ alignItems: "center" }}>
                <Button title='Add Place' onPress={() => {
                    if (inputValue !== "") {
                        props.addPlace({
                            key: Math.random().toString(), value: props.inputValue, image: {
                                uri: "https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                            }
                        })
                        setInputValue("");
                    }
                }
                } />
            </View>
        </View>
    )
}

export default connect(null, mapDispatchToProps)(SharePlaces);