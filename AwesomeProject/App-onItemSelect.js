import { View, StyleSheet, Text, StatusBar, ActivityIndicator, FlatList, Alert } from "react-native"
import { useEffect, useState } from "react"

const Todo = () => {
    const [todos, setTodos] = useState({
        error: null,
        isLoaded: false,  //spinners or progress bar 
        items: [] //todo data 
    })
    //ComponentDidMount
    useEffect(() => {
        //logic- api call
        const apiURL = 'https://jsonplaceholder.typicode.com/todos'
        fetch(apiURL).then(response => {
            return response.json()
        }).then(todos => {
            setTodos({
                items: todos,
                isLoaded: true
            })
        }).catch(err => {
            setTodos({
                isLoaded: true,
                error: err
            })
        })

    }, [])

    const onSelect = item => {
        console.log(item)
        Alert.alert(JSON.stringify(item))
    }

    //conditional Rendering : rendering ui based on state

    const { error, isLoaded, items } = todos;

    if (error) {
        return <View>
            <Text>Error: {error.message}</Text>
        </View>
    } else if (!isLoaded) {
        return <View style={{
            alignItems: 'center', justifyContent: 'center'
        }}>
            <ActivityIndicator size="large" color="#000ff" />
        </View >
    } else {
        //show data
        return <FlatList
            keyExtractor={(todo) => {
                return todo.id
            }}
            data={items}
            renderItem={({ item }) => {
                const { title } = item
                return <View style={styles.item} >
                    <Text onPress={() => {
                        onSelect(item)
                    }} style={styles.text}>{title}</Text>
                </View>
            }

            }
        />
    }
}

export default function App() {
    return <View style={styles.container}>
        <Text style={{ alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'red', textAlign: 'center' }} >Todo App</Text>
        <Todo />
    </View>
}

//page style :Common style 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8
    },
    title: {
        fontSize: 32
    }
})
