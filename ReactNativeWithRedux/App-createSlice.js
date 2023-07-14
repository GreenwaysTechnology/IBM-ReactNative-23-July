import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { configureStore,createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

let initialState = {
    name: 'Subramanian Murugan',
    house: {
        name: 'RavenClaw',
        points: 20 // increment this points
    }
}
const pointsSlice = createSlice({
    name: 'points',  //name used in action types : 'counter/increment'
    //initialState: initalState,
    initialState,
    reducers: {
        //object notation pattern
        increment(state) {
            state.house.points++
        }
    },
    //builder callback api : it is recommended for typescript
    extraReducers: builder => {
        //builder.addCase
        builder.addDefaultCase((state, action) => { })
    }

})
const { increment } = pointsSlice.actions
const PointsReducer = pointsSlice.reducer

//create Store Object  
const store = configureStore({
    reducer: {
        //reducerName:ReducerValue
        points: PointsReducer,
    },
    //middleware:[]
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
            type: increment,
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
