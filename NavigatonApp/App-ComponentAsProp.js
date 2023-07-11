import { Text, View, StyleSheet } from "react-native"

const Panel = props => {
    return <>
        {props.children}
    </>
}
const Content = props => {
    return <>{props.children}</>
}
const Title = props => <Text>{props.title}</Text>

export default function App() {
    return <View style={styles.container}>
        <Panel>
            <Title title={"Home Screen"} />
            <Content>
                <Text>MyContent</Text>
            </Content>
        </Panel>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})