import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

//Action constants 
const counterIncrementBy = 'counter/incrementBy'

//Reducer 
const counterReducer = (mycounter = {
    value: 10
}, action) => {
    //biz logic 
    switch (action.type) {
        case counterIncrementBy:
            return {
                ...mycounter, value: mycounter.value + action.payload
            }
        default:
            return mycounter; // inital counter 
    }
}

//create Store Object  
const store = configureStore({
    reducer: {
        //reducerName:ReducerValue
        counter: counterReducer,
    }
})

const Counter = props => {

    const [input, setInput] = useState(1);

    //grab state from the redux 
    const incrementValue = useSelector(state => {
        //appState.reducerName
        return state.counter;
    })
    //dispatcher hook 
    const incrementBy = useDispatch();

    //Action creator 
    const incrementActionCreator = value => {
        return {
            type: counterIncrementBy,
            payload: value
        }
    }
    const onIncrementBy = () => {
        //passing data to the reducer
         incrementBy(incrementActionCreator(parseInt(input)))
    }
    const onInput = (value) => {
        //How to read textbox value 
          setInput(value)
    }

    return <View>
        <Text>Counter Increment By {incrementValue.value}</Text>
        <TextInput onChangeText={onInput} keyboardType='numeric' style={{ backgroundColor: 'white' }} />
        <Button title="IncrementBy" onPress={onIncrementBy} />

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
