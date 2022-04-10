import React, {useState} from 'react';
import { 
    View, 
    FlatList, 
    StyleSheet, 
    TextInput,
    Dimensions, 
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
 } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { GPA_REDUCER } from '../redux/GPA_calculator/reducer/gpa_reducer';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import { increaseInput, decreaseInput, loadScreen } from '../redux/GPA_calculator/actions/actions';
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
    const [course, setCourse] = useState("")
    const [grade, setGrade] = useState("")
    const [credit, setCredit] = useState("")

    console.log(course, grade, credit)
    
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <StickyHeaderFooterScrollView
                renderStickyHeader={() => (
                    <View>
                    <HeaderList />
                    </View> 
                )}
                renderStickyFooter={() => (
                    <View>
                        <Tab />
                    </View>
                )}
                additionalHeightReserve ={0}
            >
                <View style={{ height: windowHeight / 1.3, backgroundColor: '#eee' }}>
                <FlatList 
                    data={data.textSpace}
                    keyExtractor={(item => item.id)}
                    renderItem={() => (
                        <View style={styles.textinput}>

                            <View style={styles.back}>
                                <View style={styles.textspace}>
                                    <TextInput 
                                        style={{fontSize: 18, color: 'black', textAlign: 'center'}}
                                        placeholder ="COURSE"
                                        keyboardType="default"
                                        onChangeText={text => setCourse(text)}
                                        onKeyPress={() => dispatch(loadScreen(course))}
                                    />
                                </View>
                            </View>

                            <View style={styles.back}>
                                <View style={styles.textspace}>
                                    <TextInput 
                                        style={{fontSize: 18, color: 'black', textAlign: 'center'}}
                                        placeholder ="GRADE"
                                        keyboardType="default"
                                        onChangeText={text => setCourse(text)}
                                        onKeyPress={() => dispatch(loadScreen(grade))}
                                    />
                                </View>
                            </View>

                            <View style={styles.back}>
                                <View style={styles.textspace}>
                                    <TextInput 
                                        style={{fontSize: 18, color: 'black', textAlign: 'center'}}
                                        placeholder ="CREDIT"
                                        keyboardType="numeric"
                                        onChangeText={text => setCourse(text)}
                                        onKeyPress={() => dispatch(loadScreen(credit))}
                                    />
                                </View>
                            </View>
                        </View>
                    )}
                />
                </View>
            </StickyHeaderFooterScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}



const styles = StyleSheet.create({
    main: {
        backgroundColor: '#d6d0d6',
        flex: 1
    },
    textinput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 2,
        marginRight: 5,
        marginLeft: 5
    },
    
    textspace: {
        height: 32,
        width: 111,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftColor: '#b804a6',
        backgroundColor: '#eee',
        borderTopEndRadius: 9,
        borderBottomEndRadius: 9,
        borderBottomStartRadius: 9,
    },

    back: {
        backgroundColor: '#b804a6',
        height: 38,
        width: 115,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#b804a6'
    }    
})