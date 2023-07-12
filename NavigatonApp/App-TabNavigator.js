
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Home = props => {

    return <View style={styles.container}>
        <Text>Home</Text>
    </View>
}
const Settings = props => {
    return <View style={styles.container}>
        <Text>Profile Settings</Text>
    </View>
}

//Create Tab 
const Tab = createBottomTabNavigator();


const App = () => {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} options={{ title: 'Profile-Settings' }} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});