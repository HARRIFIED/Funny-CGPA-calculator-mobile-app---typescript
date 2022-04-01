import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Home from './src/screens/Home';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <StatusBar style="light" backgroundColor="#87047a" />
        <Home />
      </View>
    </Provider>
  );
}

