import { Counter } from "./src/Counter/counter";
import { View,StyleSheet } from "react-native";

function App() {
     return <View  style={styles.container}>
          <Counter />
     </View>
}
export default App;


const styles = StyleSheet.create({
     container: {
          flex: 1,
          fontWeight:'bold',
          backgroundColor: 'pink',
          alignItems: 'center',
          justifyContent: 'center',
     },
});