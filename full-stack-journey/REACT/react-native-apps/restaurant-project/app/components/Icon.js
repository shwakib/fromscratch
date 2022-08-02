import React from "react";
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Icon = props => {
    return (
        <TouchableOpacity style={{ paddingRight: 15 }}>
            <Ionicons name="ios-menu" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default Icon;