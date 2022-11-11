import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

export default function Diet() {
  const navigation = useNavigation();
  const [dietText, setDietText] = useState();
  const handleTextChange = text => {
    setDietText(text);
  };
  const handleSendButton = () => {
    //console.log('Sent!');
    Keyboard.dismiss();
    fetch('https://ReactNativeFundamentalsServer.egrep6021ad.repl.co/create/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        diet: dietText,
      }),
    }).then(
      Alert.alert(
        'You saved your food log to the remote server!',
        `Data Saved:\n${dietText}`,
        [{text: 'OK', onPress: () => navigation.navigate('Home')}],
      ),
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput
        multiline
        numberOfLines={14}
        onChangeText={text => handleTextChange(text)}
        style={styles.textInput}
        placeholder={
          'Enter everything you ate today!\n(Press "return" to start a new line)'
        }
        placeholderTextColor="gray"
      />
      <Button title="Send" onPress={() => handleSendButton()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  textInput: {
    height: Platform.OS == 'ios' ? 300 : 200,
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    marginTop: '10%',
  },
});
