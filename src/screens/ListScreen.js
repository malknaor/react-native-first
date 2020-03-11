import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [{
        name: 'John',
        age: 21
    }, {
        name: 'Alice',
        age: 25
    }, {
        name: 'Bob',
        age: 23
    }, {
        name: 'Json',
        age: 24
    }, {
        name: 'David',
        age: 51
    }, {
        name: 'Kaden',
        age: 15
    }, {
        name: 'Jane',
        age: 32
    }];

    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={style.listStyle}>
                        {`${item.name} - Age ${item.age}`}
                    </Text>
                )
            }}>
        </FlatList>
    );
};

const style = StyleSheet.create({
    listStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 40
    }
});

export default ListScreen;