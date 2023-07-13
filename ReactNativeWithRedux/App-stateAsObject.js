import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

//Reducer 
const CounterReducer = (mycounter = {
    value: 10
}, action) => {
    //biz logic 
    switch (action.type) {
        case 'counter/increment':
            //immutable logic 
            return { ...mycounter, value: mycounter.value + 1 }
        default:
            return mycounter; // inital counter 
    }

}
//create Store Object  
const store = configureStore({
    reducer: {
        //reducerName:ReducerValue
        counter: CounterReducer
    }
})

const Counter = props => {
    //grab state from the redux 
    const counter = useSelector(state => {
        //appState.reducerName
        return state.counter;
    })
    console.log(counter)
    //dispatcher hook 
    const increment = useDispatch();
    return <View>
        <Text>Counter {counter.value}</Text>
        <Button title="+" onPress={() => {
            increment({ type: 'counter/increment' })
        }
        } />

    </View>
}



export default function App() {
    return (<Provider store={store}>
        <View style={styles.container}>
            <Counter />
            <StatusBar style="auto" />
        </View>
    </Provider>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
