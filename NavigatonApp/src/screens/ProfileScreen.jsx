
import { Text, StyleSheet, View, Button } from "react-native";
import { Profile } from "../components/profiles/Profile";

export function ProfileScreen(props) {
    return <View style={styles.container}>
        <Profile />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});