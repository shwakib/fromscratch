import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import InputPlace from './components/InputPlace/inputPlace';
import PlaceList from './components/PlaceList/placeList';

export default function App() {
  const [inputValue, setInputValue] = useState(""); //State defined
  const [placeList, setPlaceList] = useState([]); //State defined

  return (
    <View style={styles.container}>
      <InputPlace
        inputValue={inputValue} setInputValue={setInputValue} placeList={placeList} setPlaceList={setPlaceList} />
      <PlaceList placeList={placeList} />
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
