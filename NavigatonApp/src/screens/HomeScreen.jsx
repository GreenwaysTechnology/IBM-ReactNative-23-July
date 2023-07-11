import { Text, StyleSheet, View, Button } from "react-native";

export function HomeScreen(props) {

    const moveToProfile = () => {
        //navigate to Profile Screen
        props.navigation.navigate('Profile')
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Profile" onPress={moveToProfile} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});