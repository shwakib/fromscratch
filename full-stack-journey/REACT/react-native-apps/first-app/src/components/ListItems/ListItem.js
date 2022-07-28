import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                {/* <Unorderedlist>
                <List><Text>{props.places}</Text></List>
            </Unorderedlist> */}
                <Image source={{ uri: props.image }} style={{ width: 60, height: 50 }} />
                <Text style={{ paddingLeft: 15 }}>{props.places}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: "row"
    }
})

export default ListItem;