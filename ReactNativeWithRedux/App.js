import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

//Reducer 
const CounterReducer = (value = 10, action) => {
    //biz logic 
    switch (action.type) {
        case 'counter/increment':
            //immutable logic 
            return value + 1
        default:
            return value; // inital counter 
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
        //appstate.reducerName.reducerProp
        console.log(state)
        return state.counter
    })
    //dispatcher hook 
    const increment = useDispatch();

    //listener 
    const onIncrement = () => {
        //declare action 
        // let incrementAction = {
        //     type: 'counter/increment'
        // }
        //send action 
        //increment(incrementAction)
        increment({ type: 'counter/increment' })

    }

    return <View>
        <Text>Counter {counter}</Text>
        <Button title="+" onPress={onIncrement} />
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
