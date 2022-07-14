import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput placeholder='Add a Place...' style={{
          width: "80%",
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7
        }} value={inputValue} onChangeText={text => setInputValue(text)} />
        <Button title='Add' onPress={() => {
          if (inputValue !== "") {
            setPlaceList([...placeList, inputValue])
          }
        }
        } />
      </View>
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
  },
  inputView: {
    padding: 20,
    width: "60%",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
