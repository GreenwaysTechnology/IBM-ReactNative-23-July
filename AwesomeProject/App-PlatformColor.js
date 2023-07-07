import { StyleSheet, View, Text, Platform,PlatformColor } from "react-native"

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
                color: PlatformColor('label'),
                backgroundColor:  PlatformColor('systemTealColor')

            },
            android: {
                color: PlatformColor('?android:attr/textColor'),
                backgroundColor: PlatformColor('@android:color/holo_blue_bright')
            },
            default: { color: 'black' }
        })
    }
})
