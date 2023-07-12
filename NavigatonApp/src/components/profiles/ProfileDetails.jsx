import { View,Text } from "react-native"

export const ProfileDetails = props => {
    return <View>
        <Text style={{ textAlign: 'center', fontSize: 40 }}>
            Profile Details -{JSON.stringify(props.item)}
        </Text>
    </View>
}