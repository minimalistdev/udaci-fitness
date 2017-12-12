import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import  AddEntry from './components/AddEntry'

export default class App extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <AddEntry />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
