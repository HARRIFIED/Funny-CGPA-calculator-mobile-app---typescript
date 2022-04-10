import React from 'react';
import { View, Pressable, Text, StyleSheet, Dimensions, Image, } from 'react-native';
import { useDispatch } from 'react-redux';
import { increaseInput, decreaseInput } from '../redux/GPA_calculator/actions/actions';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Tab() {
    const dispatch = useDispatch()

    return (
        <View style={styles.tab}>
            <Pressable style={{
                marginBottom: 39,
                marginLeft: 100,
                width: 100,
                height: 50,
                borderBottomStartRadius: 5,
                borderBottomEndRadius: 5,
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                backgroundColor: '#b804a6',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>CALCULATE</Text>
            </Pressable>
            <View style={{
                marginBottom: 60,
                marginLeft: 100,
                marginRight: 0
            }}>
            <Pressable 
                style={{
                    height: 40,
                    width: 40,
                    borderRadius: 50,
                    backgroundColor: '#b804a6',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => dispatch(increaseInput())}
            >
                <Image 
                    source={require('../../assets/icons/add.png')}
                    style={{
                        width: 60,
                        height: 22,
                        resizeMode: 'contain',
                        tintColor: '#2fed39'
                    }}
                />
            </Pressable>
            <Pressable 
                style={{
                    height: 34,
                    width: 40,
                    borderRadius: 50,
                    backgroundColor: '#b804a6',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={() => dispatch(decreaseInput())}
            >
                <Image 
                    source={require('../../assets/icons/substrate.png')}
                    style={{
                        width: 40,
                        height: 34,
                        resizeMode: 'contain',
                        tintColor: '#2fed39'
                    }}
                />
            </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tab: {
        width: windowWidth,
        height: windowHeight / 6,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})