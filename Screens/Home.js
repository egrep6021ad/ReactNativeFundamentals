import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const handleWorkoutButton = () => {
    navigation.navigate('Workout');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text> Hello Class! </Text>
        <Button title="Workout" onPress={() => handleWorkoutButton()} />
      </View>
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
    backgroundColor: 'yellow',
  },
});
