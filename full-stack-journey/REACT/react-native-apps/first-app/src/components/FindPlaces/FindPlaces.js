import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import PlaceList from '../PlaceList/placeList';
import PlaceDetail from '../placeDetail/placeDetail'
import { connect } from 'react-redux';
import { removePlace, loadPlaces } from '../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        placeList: state.placeList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removePlace: key => dispatch(removePlace(key)),
        loadPlaces: () => dispatch(loadPlaces())
    }
}

const FindPlaces = props => {
    const [selectedPlace, setSelectedPlace] = useState(null);

    useEffect(() => {
        props.loadPlaces();
    })

    const handleSelectedPlace = key => {
        const place = props.placeList.find(place => {
            return place.key === key;
        })
        setSelectedPlace(place);
    }
    const handleModalClose = () => {
        setSelectedPlace(null);
    }
    const handleDeleteItem = key => {
        props.removePlace(key);
        setSelectedPlace(null);
    }

    let placeDetail = null;
    if (selectedPlace !== null) {
        placeDetail = <PlaceDetail place={selectedPlace} handleModalClose={handleModalClose} handleDeleteItem={handleDeleteItem} />
    }
    return (
        <View style={styles.container}>
            {placeDetail}
            <PlaceList placeList={props.placeList} handleSelectedPlace={handleSelectedPlace} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaces);