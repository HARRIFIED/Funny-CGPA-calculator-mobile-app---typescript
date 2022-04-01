import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={{marginTop: 40}}>
                <Text style={styles.text}>YOUR CURRENT GPA IS</Text>
                <Text style={styles.text2}>5.0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 0,
        width: windowWidth,
        height: windowHeight / 6,
        backgroundColor: '#b804a6'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
    },
    text2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 15
    },
})