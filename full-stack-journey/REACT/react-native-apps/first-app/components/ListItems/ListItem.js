import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                {/* <Unorderedlist>
                <List><Text>{props.places}</Text></List>
            </Unorderedlist> */}
                <Text>{props.places}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5
    }
})

export default ListItem;