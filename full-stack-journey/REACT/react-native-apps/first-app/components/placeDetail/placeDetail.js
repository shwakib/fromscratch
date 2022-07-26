import React from "react";
import { View, Modal, Image, Text, Button } from 'react-native';

const placeDetail = props => {
    return (
        <Modal>
            <View>
                <Image source={props.place.image} style={{ width: "100%", height: 300 }} />
                <Text style={{ textAlign: "center", fontSize: 40, fontWeight: "bold" }}>{props.place.value}</Text>
                <View>
                    <Button title="Delete" color="red" onPress={() => props.handleDeleteItem(props.place.key)} />
                    <Button title="Close" onPress={() => props.handleModalClose()} />
                </View>
            </View>
        </Modal>
    )
}

export default placeDetail;