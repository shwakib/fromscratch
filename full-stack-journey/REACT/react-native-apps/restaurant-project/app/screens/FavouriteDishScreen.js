import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Icon from "../components/Icon";
import { connect } from "react-redux";
import Card from "../components/Card";

const mapStateToProps = state => {
    return {
        favouriteDish: state.favouriteDish
    }
}

const FavouriteDishScreen = props => {
    return (
        <FlatList data={props.favouriteDish} renderItem={({ item }) => (<Card item={item} />)} keyExtractor={item => item.id.toString()} />
    )
}

export default connect(mapStateToProps)(FavouriteDishScreen);