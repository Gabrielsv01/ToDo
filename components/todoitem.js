import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const TodoItem = ({ item, pressHandler }) => {
    return (
        <View>
            <TouchableOpacity onPress={()=> {pressHandler(item.key)}}>
                <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    item: {
        marginTop: 16,
        padding: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10
    }

});

export default TodoItem;