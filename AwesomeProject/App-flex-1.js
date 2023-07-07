import { StyleSheet, View, Text } from "react-native";


export default function App() {

    return <View style={styles.container}>
        <Text>
            React Native Flex Box
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    }
})