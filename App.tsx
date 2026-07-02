import React from 'react';
import Styles from './style/styling'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, View } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={Styles.body}>
      <View >
        <Text style={Styles.greenText}>Hello, World!</Text>

        <TextInput
          placeholder="Enter text here..."
          style={Styles.input}
        />
      </View>
    </SafeAreaView>
  );
}
