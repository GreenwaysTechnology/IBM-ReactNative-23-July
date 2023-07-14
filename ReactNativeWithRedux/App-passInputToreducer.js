import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

//Action constants 
const counterIncrement = 'counter/increment';
const counterIncrementBy = 'counter/incrementBy'

//Reducer 
const counterReducer = (mycounter = {
    value: 10
}, action) => {
    //biz logic 
    switch (action.type) {
        case counterIncrement:
            //immutable logic 
            return { ...mycounter, value: mycounter.value + 1 }
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
    //grab state from the redux 
    const incrementValue = useSelector(state => {
        //appState.reducerName
        return state.counter;
    })
    //dispatcher hook 
    const increment = useDispatch();
    const incrementBy = useDispatch();

    const onIncrementBy = () => {
        //passing data to the reducer
        incrementBy({ type: counterIncrementBy, payload: 2 })
    }

    return <View>
        <Text>Counter Increment {incrementValue.value} Counter Increment By {incrementValue.value}</Text>
        <Button title="+" onPress={() => {
            increment({ type: counterIncrement })
        }
        } />
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
