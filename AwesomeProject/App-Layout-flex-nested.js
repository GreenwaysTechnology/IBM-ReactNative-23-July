import { StyleSheet, View, Text } from "react-native";

/**
 * 
 * container view flex =1
 * view 1 flex =1
 * view 2 flex =2
 * view 3 flex =3
 * Total space = view 1 + view 2 + view 3 => 1+ 2+ 3=>6
 *  1/6,2/6,3/6
 * 
  */

export default function App() {

    return <View style={styles.container}>
        <Text style={styles.headerStyle}> Flex</Text>
        <View style={{ flex: 1, height: 50, width: 50, backgroundColor: '#EE2C38' }} />
        <View style={{ flex: 2, height: 50, width: 50, backgroundColor: '#FAA030' }} />
        <View style={{ flex: 3, height: 50, width: 50, backgroundColor: '#32B76C' }} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 48,
        marginLeft:10,
        padding:10,
        // flexDirection: 'row',
         flexDirection:'row-reverse',
        // flexDirection: 'column-reverse',
        backgroundColor: 'pink',

    },
    headerStyle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400',
    }
})