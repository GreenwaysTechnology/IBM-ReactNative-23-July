import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

//Reducer 
const IncrementReducer = (mycounter = {
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
const DecrementReducer = (mycounter = {
    value: 100
}, action) => {
    //biz logic 
    switch (action.type) {
        case 'counter/decrement':
            //immutable logic 
            return { ...mycounter, value: mycounter.value - 1 }
        default:
            return mycounter; // inital counter 
    }

}
//create Store Object  
const store = configureStore({
    reducer: {
        //reducerName:ReducerValue
        increment: IncrementReducer,
        decrement: DecrementReducer
    }
})

const Counter = props => {
    //grab state from the redux 
    const incrementValue = useSelector(state => {
        //appState.reducerName
        return state.increment;
    })
    const decrementValue = useSelector(state => {
        //appState.reducerName
        return state.decrement;
    })
    //dispatcher hook 
    const increment = useDispatch();
    const decrement = useDispatch();

    return <View>
        <Text>Counter Increment {incrementValue.value} Counter Decrement {decrementValue.value}</Text>
        <Button title="+" onPress={() => {
            increment({ type: 'counter/increment' })
        }
        } />
        <Button style={{marginTop: 50}} title="-" onPress={() => {
            decrement({ type: 'counter/decrement' })
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
