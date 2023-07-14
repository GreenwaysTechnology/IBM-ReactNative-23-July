import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

//Action constants 
const counterIncrementBy = 'counter/incrementBy'

//Reducer 
const PointsReducer = (customer = {
    name: 'Subramanian',
    house: {
        name: 'RavenClaw',
        points: 10 // increment this points
    }
}, action) => {
    //biz logic 
    switch (action.type) {
        case counterIncrementBy:
            return {
                ...customer,  // level -0 clone outter properties only 
                house: {
                    ...customer.house, // level 2
                    points: customer.house.points + action.payload     //clone all properties 								   except points
                }
            }
        default:
            return customer; // inital counter 
    }
}

//create Store Object  
const store = configureStore({
    reducer: {
        //reducerName:ReducerValue
        points: PointsReducer,
    }
})

const Points = props => {

    //grab state from the redux 
    const customerPoints = useSelector(state => {
        //appState.reducerName
        return state.points;
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
        incrementBy(incrementActionCreator(2))
    }
    return <View>
        <Text>
            Customer Name : {customerPoints.name}
        </Text>
        <Text>
            House Name : {customerPoints.house.name}
        </Text>
        <Text>
            House Points : {customerPoints.house.points}
        </Text>
        <Button title="IncrementBy" onPress={onIncrementBy} />

    </View>
}



export default function App() {
    return (<Provider store={store}>
        <View style={styles.container}>
            <Points />
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
