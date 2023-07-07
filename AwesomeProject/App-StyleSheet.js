import { Text, StyleSheet,View } from "react-native";


// function App() {
//     return <>
//         <Text style={styles}>Hello</Text>
//         <Text style={styles}>Hai</Text>
//         <Text style={styles}>Welcome</Text>


//     </>
// }

function App() {
    return <View style={styles.container}>
        <Text style={styles.label}>Hello</Text>
        <Text style={styles.label}>Hai</Text>
        <Text style={styles.label}>Welcome</Text>
    </View>
}
export default App;

//create Sytles 
// const styles = StyleSheet.create({
//     fontSize: 150
// })

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#9e7013'
    },
    label: {
        fontSize:100,
        color:'#9e1313',
        fontStyle:'italic'
    }
})