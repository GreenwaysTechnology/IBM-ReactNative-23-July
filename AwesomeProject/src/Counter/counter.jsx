import { useState } from "react"
import { View, Text, Button } from 'react-native'

export const Counter = props => {
    const [value, setValue] = useState(0)
    const onIncrement = () => {
         setValue(value + 1)
    }
    return <View>
        <Text>Counter App</Text>
        <Text>Value {value}</Text>
        <Button
          title="Increment"
          onPress={onIncrement}
        />
    </View>
}

