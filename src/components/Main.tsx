import React from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Pressable, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GPA_REDUCER } from '../redux/GPA_calculator/reducer/gpa_reducer';

import { increaseInput, decreaseInput } from '../redux/GPA_calculator/actions/actions';
import Header from './Header';
import Tab from './Tab';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

function HeaderList() {
    return (
        <View>
            <Header />
          
        </View>
    );
}


export default function Main() {
    const dispatch = useDispatch()
    const data = useSelector((state: any) => {
        return state[GPA_REDUCER]
    })
    const [course, setCourse] = React.useState()
    const [grade, setGrade] = React.useState()
    const [credit, setCredit] = React.useState()

    function FooterList() {
        return (
            <View style={styles.tab}>
                <Pressable onPress={() => dispatch(increaseInput())}>
                    <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>Increase</Text>
                </Pressable>
            </View>
        );
    }
    return (
        
            <FlatList 
                data={data.textSpace}
                renderItem ={() => (
                    <View style={styles.textinput}>
                        <TextInput 
                            value={course}
                            placeholder ="COURSE"
                            keyboardType="default"
                        />
                        <TextInput 
                            value={grade}
                            placeholder ="GRADE"
                            keyboardType="default"
                        />
                        <TextInput 
                            value={credit}
                            placeholder ="CREDIT"
                            keyboardType="numeric"
                        />
                    </View>
                )}
                ListHeaderComponent={HeaderList}
                stickyHeaderIndices={[0]}
                ListFooterComponent={FooterList}
            />            
    );
}



const styles = StyleSheet.create({
    main: {
        backgroundColor: '#d6d0d6'
    },
    textinput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    tab: {
        width: windowWidth,
        height: windowHeight / 6,
        marginBottom: 0,
        backgroundColor: 'black',
        marginTop: 10
    }
})