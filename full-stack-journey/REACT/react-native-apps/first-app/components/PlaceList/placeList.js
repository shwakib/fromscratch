import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from '../ListItems/ListItem';

const placeList = props => {
    return (
        <FlatList style={{
            width: "100%"
        }} data={props.placeList} renderItem={info => {
            return (
                <ListItem places={info.item.value} onItemPressed={() => alert(info.item.value)} />
            )
        }} />
    )
}

export default placeList;