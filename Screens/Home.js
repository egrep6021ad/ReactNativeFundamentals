import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

export default function Home() {
  // Local navigation reference:
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  // Button press handler:
  const handleWorkoutButton = () => {
    navigation.navigate('Workout', {
      location: location,
    });
  };

  const requestAndroidLocation = async () => {
    try {
      let access = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (access == 'granted') {
        console.log('Android location enabled');
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const requestIphoneLocation = async () => {
    const access = await Geolocation.requestAuthorization('always').then(
      res => {
        if (res == 'granted') {
          console.log('IOS location enabled');
          Geolocation.getCurrentPosition(
            position => {
              console.log(position);
              setLocation(position);
            },
            error => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      },
    );
  };

  useEffect(() => {
    if (isLoading) {
      if (Platform.OS == 'ios') requestIphoneLocation();
      if (Platform.OS == 'android') requestAndroidLocation();
      setIsLoading(false);
    }
  });
  // View:
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text> Home </Text>
        <Button title="Workout" onPress={() => handleWorkoutButton()} />
      </View>
    </SafeAreaView>
  );
}
// Styles:
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
