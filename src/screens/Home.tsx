import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { increaseInput, decreaseInput } from '../redux/GPA_calculator/actions/actions';
import Main from '../components/Main';

export default function Home () {
    const dispatch = useDispatch()
    return (
        <View>
            <Main />
        </View>
    );
}