import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import InputPlace from './components/InputPlace/inputPlace';
import PlaceList from './components/PlaceList/placeList';
import PlaceDetail from './components/placeDetail/placeDetail';

export default function App() {
  const [inputValue, setInputValue] = useState(""); //State defined
  const [placeList, setPlaceList] = useState([]); //State defined
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectedPlace = key => {
    const place = placeList.find(place => {
      return place.key === key;
    })
    setSelectedPlace(place);
  }
  const handleModalClose = () => {
    setSelectedPlace(null);
  }
  const handleDeleteItem = key => {
    setPlaceList(placeList.filter(place => place.key !== key));
    setSelectedPlace(null);
  }

  let placeDetail = null;
  if (selectedPlace !== null) {
    placeDetail = <PlaceDetail place={selectedPlace} handleModalClose={handleModalClose} handleDeleteItem={handleDeleteItem} />
  }
  return (
    <View style={styles.container}>
      {placeDetail}
      <InputPlace
        inputValue={inputValue} setInputValue={setInputValue} placeList={placeList} setPlaceList={setPlaceList} />
      <PlaceList placeList={placeList} handleSelectedPlace={handleSelectedPlace} />
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
