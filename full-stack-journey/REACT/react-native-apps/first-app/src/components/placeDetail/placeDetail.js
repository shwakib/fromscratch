import React from "react";
import { View, Modal, Image, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const placeDetail = props => {
    return (
        <Modal>
            <View>
                <Image source={props.place.image} style={{ width: "100%", height: 300 }} />
                <Text style={{ textAlign: "center", fontSize: 40, fontWeight: "bold" }}>{props.place.value}</Text>
                <View>
                    <Icon name="trash" size={20} color="red" />
                    <Button title="Delete" color="red" onPress={() => props.handleDeleteItem(props.place.key)} />
                    <Button title="Close" onPress={() => props.handleModalClose()} />
                </View>
            </View>
        </Modal>
    )
}

export default placeDetail;