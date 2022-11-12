import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Workout from './Screens/Workout';
import Signup from './Screens/Signup';
import Diet from './Screens/Diet';
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Diet" component={Diet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
