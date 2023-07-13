import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Counter = props => {
  const [counter, setCounter] = useState(0)
  const onIncremement = () => {
    setCounter(counter + 1)
  }
  return <View>
    <Text>Counter {counter}</Text>
    <Button title="+" onPress={onIncremement }/>
  </View>
}



export default function App() {
  return (
    <View style={styles.container}>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
