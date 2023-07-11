import { StyleSheet, Text, View, Button, Alert, StatusBar, ActivityIndicator, FlatList, TouchableHighlight } from 'react-native'
import { useEffect, useState } from 'react';

export const Profile = props => {
    //declare state to hold items
    const [profiles, setProfiles] = useState({
        error: null,
        isLoaded: false,  //spinners or progress bar 
        items: [] //todo data 
    })
    //componentDidMount life cycle method 
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(res => res.json())
            .then(profiles => {
                setProfiles({
                    items: profiles,
                    isLoaded: true
                })
            })
            .catch(err => {
                setProfiles({
                    isLoaded: true,
                    error: err
                })
            })
    }, [])

    const { error, isLoaded, items } = profiles;
    // conditional rendering:
    if (error) {
        return <View>
            <Text>Error: {error.message}</Text>
        </View>
    } else if (!isLoaded) {
        //show spinner
        return <View style={{
            alignItems: 'center', justifyContent: 'center'
        }}>
            <ActivityIndicator size="large" color="#000ff" />
        </View >
    } else {
        //show data
        return <FlatList
            keyExtractor={(user) => {
                return user.id
            }}
            data={items}
            renderItem={({ item }) => {
                const { username } = item
                return <TouchableHighlight onPress={() => {
                    //select item
                }} activeOpacity={0.6} underlayColor="#DDDDD">
                    <View style={styles.item} >
                        <Text style={styles.text}>{username}</Text>
                    </View>
                </TouchableHighlight>

            }

            }
        />
    }
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
