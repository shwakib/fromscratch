import React from "react";
import { View, Modal, Image, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const placeDetail = props => {
    return (
        <Modal>
            <View>
                <Image source={{ uri: props.place.image }} style={{ width: "100%", height: 300 }} />
                <Text style={{ textAlign: "center", fontSize: 40, fontWeight: "bold" }}>{props.place.value}</Text>
                <View style={{ alignItems: "center", marginTop: 45 }}>
                    <TouchableOpacity onPress={() => props.handleDeleteItem(props.place.key)}>
                        <Icon name="trash" size={60} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.handleModalClose()} style={{ marginTop: 30 }}>
                        <Icon name="times-circle" size={60} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default placeDetail;