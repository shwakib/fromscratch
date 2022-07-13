import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const handleInputChange = text => {
    alert(text);
  }
  return (
    <View style={styles.container}>
      <Text>Hello! I am Sifat Hasan Wakib</Text>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} placeholder="I Am A Placeholder" onChangeText={text => handleInputChange(text)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
