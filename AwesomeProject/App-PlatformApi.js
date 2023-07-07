import { StyleSheet, View, Text, Platform } from "react-native"

export default function App() {
    return <View style={styles.container}>
        <Text>Welcome</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        ...Platform.select({
            ios: {
                color: 'red',
                backgroundColor: 'yellow'

            },
            android: {
                color: 'green',
                backgroundColor: 'pink'
            },
            default: { color: 'black' }
        })
    }
})