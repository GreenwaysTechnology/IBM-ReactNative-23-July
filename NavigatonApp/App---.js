import { Text, View, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native'



export default function App() {
    return <View style={styles.container}>
        <NavigationContainer>
            {/* Rest of your app code */}
        </NavigationContainer>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})