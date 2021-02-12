import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, SafeAreaView } from 'react-native';


const AddTodo = (subimitHandler) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    const resetValue = () => {
        setText('');
    }

    return (
        <SafeAreaView>
            <View style={styles.Input}>
                <View style={styles.add}>
                    <TextInput
                        placeholder={'Digite a tarefa'}
                        onChangeText={changeHandler}
                        value={text}
                        
                    />
                </View>

                <View style={styles.button}>
                    <Button onPress={() => subimitHandler.subimitHandler(text,resetValue)} title='add' color='#ff7f50' />
                </View>
            </View>

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    add: {
        marginTop: 20,
        marginBottom: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        width: 240
    },
    button: {
        marginHorizontal: 20,
        marginTop: 25,
        width: 50,
        height: 50

    },

    Input: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 45,

    }
});


export default AddTodo;