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
    const [image, setImage] = useState("");

    const handleAddingplace = () => {
        if (inputValue === "" || image === "") {
            if (image === "") {
                alert("Pick An Image")
            }
        }
        else {
            props.addPlace({
                key: Math.random().toString(), value: inputValue, image: image
            })
            setInputValue("");
            setImage("");
            props.navigation.navigate("Find Places");
        }
    }
    return (
        <View>
            <PickImage image={image} setImage={setImage} />
            <InputPlace
                inputValue={inputValue} setInputValue={setInputValue} />
            <View style={{ alignItems: "center" }}>
                <Button title='Add Place' onPress={() => handleAddingplace()} />
            </View>
        </View>
    )
}

export default connect(null, mapDispatchToProps)(SharePlaces);