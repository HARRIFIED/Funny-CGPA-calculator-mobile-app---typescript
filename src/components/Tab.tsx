import React from 'react';
import { View, Pressable, Text, StyleSheet, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { increaseInput, decreaseInput } from '../redux/GPA_calculator/actions/actions';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Tab() {
    const dispatch = useDispatch()

    return (
        <View style={styles.tab}>
            <Pressable onPress={() => dispatch(increaseInput())}>
                <Text>Increase</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    tab: {
        width: windowWidth,
        height: windowHeight / 6,
        backgroundColor: 'white',
        textAlign: 'center'
    }
})