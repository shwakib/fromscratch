import React from "react";
import { View, StyleSheet, Image, Text, Pressable, Alert } from 'react-native';
import { connect } from "react-redux";
import { removeFavouriteDish } from "../redux/actionCreators";

const mapDispatchToProps = dispatch => {
    return {
        removeFavouriteDish: dish => dispatch(removeFavouriteDish(dish))
    }
}

const Card = props => {
    const removeFavDish = () => {
        Alert.alert(
            'Delete favourite?',
            'Are you sure to delete ' + props.item.name + ' from your favourite list?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log("Cancelled"),
                    style: "cancel"
                },
                {
                    onPress: () => props.removeFavouriteDish(props.item),
                },
            ]
        )
    }
    return (
        <Pressable onLongPress={() => removeFavDish()}>
            <View style={styles.card}>
                <Image source={{ uri: props.item.image }} style={styles.image} />
                <View style={styles.details}>
                    <Text style={styles.title}>{props.item.name}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 20,
        elevation: 5
    },
    details: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 150
    },
    title: {
        marginBottom: 7,
        fontSize: 20
    }
})

export default connect(null, mapDispatchToProps)(Card);