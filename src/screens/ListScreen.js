import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [{
        name: 'John'
    }, {
        name: 'Alice'
    }, {
        name: 'Bob'
    }, {
        name: 'Json'
    }, {
        name: 'Jane'
    }];

    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {

                return (
                    <Text style={style.listStyle}>
                        {item.name}
                    </Text>
                )
            }}>
        </FlatList>
    );
};

const style = StyleSheet.create({
    listStyle: {
        fontSize: 30
    }
});

export default ListScreen;