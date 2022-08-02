import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Icon from "../components/Icon";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        favouriteDish: state.favouriteDish
    }
}

const FavouriteDishScreen = props => {
    return (
        <FlatList data={props.favouriteDish} renderItem={({ item }) => (<Text>{item.name}</Text>)} keyExtractor={item => item.id.toString()} />
    )
}

export default connect(mapStateToProps)(FavouriteDishScreen);