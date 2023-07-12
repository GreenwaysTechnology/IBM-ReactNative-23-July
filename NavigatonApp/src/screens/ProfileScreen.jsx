
import { Text, StyleSheet, View, Button } from "react-native";
import { Profile } from "../components/profiles/Profile";

export function ProfileScreen(props) {
    return <View>
        <Profile {...props} />
    </View>
}

