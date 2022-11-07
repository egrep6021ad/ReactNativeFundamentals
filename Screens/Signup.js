import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

export default function Signup() {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const nameHandler = text => {
    setName(text);
  };
  const emailHandler = text => {
    setEmail(text);
  };

  // Save the data locally:
  const saveLocalData = async () => {
    try {
      await AsyncStorage.setItem(`name`, name);
      await AsyncStorage.setItem(`email`, email);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Home');
  };
  // Fetch local data:
  const getLocalData = async () => {
    try {
      const name = await AsyncStorage.getItem(`name`);
      const email = await AsyncStorage.getItem(`email`);
      console.log('Current user: ' + name);
      console.log("Current user's email: " + email);
      if (email != null && name != null) navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('[RENDERING]: Signup Screen');
    if (isLoading) {
      getLocalData();
      setIsLoading(false);
    }
  }, []);
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <TextInput
            onChangeText={text => {
              nameHandler(text);
            }}
            style={styles.textInput}
            placeholder="Name"
          />
          <TextInput
            onChangeText={text => {
              emailHandler(text);
            }}
            style={styles.textInput}
            placeholder="Email"
          />
          <Button
            onPress={() => {
              saveLocalData();
            }}
            title="register"
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  textInput: {
    height: 50,
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    padding: 3,
    margin: 5,
  },
});
