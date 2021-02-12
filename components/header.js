import React from 'react';
import { Colors} from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Minhas Tarefas
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff7f50',
        padding: 20
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white,
    }

});

export default Header;