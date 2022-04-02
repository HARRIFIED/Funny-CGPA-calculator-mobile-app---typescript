import React from 'react';
import { 
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
     Keyboard
} from 'react-native';

import Main from '../components/Main';

export default function Home () {
    return (
        <KeyboardAvoidingView
           behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Main />
            </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
}