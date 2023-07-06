import { Text, View } from "react-native";

export const Greeter = props => {
    const { name, message } = props;
    return <View>
        <Text>{message} {name}</Text>
    </View>
}
//Default Props
Greeter.defaultProps = {
    name: 'Name',
    message: 'Welcome'
}