import { View, Text, FlatList, StyleSheet } from "react-native"
import { TODOS } from "./src/mock-data/todos"

const Todo = (props) => {
    return <>
        <Text>Todo</Text>
        {/* <FlatList data={props.todos} renderItem={(obj) => {
            return <Text>
                  {obj.item.title}
            </Text>
        }} /> */}
        {/* <FlatList
            data={props.todos}
            renderItem={({ item }) => {
                return <Text>{item.title}</Text>
            }} /> */}
        {/* <FlatList
            data={props.todos}
            renderItem={({ item: { title } }) => {
                return <Text>{title}</Text>
            }} /> */}

        <FlatList
            data={props.todos}
            renderItem={({ item: { title } }) => <Text style={styles.item}>{title}</Text>}
            keyExtractor={item => item.id}
        />
    </>
}

const App = () => {
    return <View style={styles.container}>
        <Todo todos={TODOS} />
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent:'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})