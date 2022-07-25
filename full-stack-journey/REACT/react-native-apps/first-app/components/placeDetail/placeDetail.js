import React from "react";
import { View, Modal, Image, Text, Button } from 'react-native';

const placeDetail = props => {
    return (
        <Modal>
            <View>
                <Text>{props.place.value}</Text>
                <View>
                    <Button title="Delete" />
                </View>
            </View>
        </Modal>
    )
}

export default placeDetail;