import { View, StyleSheet,Text   } from 'react-native'
import * as Network from 'expo-network'
import { useEffect, useState } from 'react';


export default function App() {
    const [network, setNetwork] = useState(null)
    useEffect(() => {
        async function init() {
            const ip = await Network.getIpAddressAsync();
            console.log(ip)
            setNetwork(ip)
        }
        init()
    }, [])

    return <View style={styles.container}>
        <Text style={styles.paragraph}>Ip Address{network}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        fontSize: 40,
        color: 'blue'
    }
});