import React, { useState } from "react";
import { View, Text } from "react-native";
import InputPlace from '../InputPlace/inputPlace';
import { connect } from 'react-redux';
import { addPlace, deletePlace } from '../../redux/actionCreators';

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place))
    }
}

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState(""); //State defined
    return (
        <InputPlace
            inputValue={inputValue} setInputValue={setInputValue} addPlace={props.addPlace} />
    )
}

export default connect(null, mapDispatchToProps)(SharePlaces);