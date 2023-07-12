import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./src/screens/HomeScreen";
import { ProfileScreen } from './src/screens/ProfileScreen';
import { ProfileDetailsScreen } from './src/screens/ProfileDetailsScreen';

//create StackNavigator Object 
const Stack = createNativeStackNavigator();

export default function App() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}
