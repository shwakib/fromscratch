import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello! I am Sifat Hasan Wakib</Text>
      <Text>Hello! I am Sifat Hasan Wakib</Text>
      <Text>Hello! I am Sifat Hasan Wakib</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column-reverse'
  },
  textStyle: {
    color: "red"
  }
});
