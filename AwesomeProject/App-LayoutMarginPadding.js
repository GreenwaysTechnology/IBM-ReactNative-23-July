import { Text, View } from "react-native";


export default function App() {

    return <View>
        <View style={{ width: 70, marginTop:50, marginLeft:20, height: 50, backgroundColor: 'pink' ,padding:10 }}>
            <Text style={{color:'red'}}>Box-1</Text>
        </View>
        <View style={{ width: 100,marginTop:50,padding:10, height: 100,marginLeft:20, backgroundColor: 'blue' }} >
            <Text  style={{color:'white'}}>Box-2</Text>
        </View>
        <View style={{ width: 150,marginTop:50,padding:10, height: 100, marginLeft:20, backgroundColor: 'yellow' }}>
            <Text  style={{color:'red'}}>Box-3</Text>
        </View>
        <View style={{ width: 400, marginTop:50,height: 100, padding:10, marginLeft:20, backgroundColor: 'green' }}>
            <Text  style={{color:'white'}}>Box-4</Text>
        </View>
    </View>
}

