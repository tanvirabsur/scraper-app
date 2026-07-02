import React from 'react';
import Styles from './style/styling'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = React.useState('');
  const [displayText, setDisplayText] = React.useState('');


  const handlesubmit = () => {
    setDisplayText(text);
  }

  return (
    <SafeAreaView style={Styles.body}>
      <View >
        <Text style={Styles.greenText}>Hello, World!</Text>

        <TextInput
          placeholder="Enter text here..."
          style={Styles.input}
          value={text}
          onChangeText={setText}
        />

        <Pressable onPress={() => handlesubmit()} style={Styles.btn}>
          <Text>Submit</Text>
        </Pressable>

        <Text>Display Text: {displayText}</Text>
      </View>
    </SafeAreaView>
  );
}
