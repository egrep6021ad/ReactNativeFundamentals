import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';

export default function Workout() {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text> Workout Screen! </Text>
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
