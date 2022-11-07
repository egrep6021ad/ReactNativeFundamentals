import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  View,
  Button,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default function Workout({route, navigation}) {
  const [location, setLocation] = useState(route.params.location);
  const [totalDistance, setTotalDistance] = useState(0);
  const startRun = () => {
    calculateDistance();
  };
  const calculateDistance = () => {
    Geolocation.getCurrentPosition(
      position => {
        lon1 = (location.coords.longitude * Math.PI) / 180;
        lon2 = (position.coords.longitude * Math.PI) / 180;
        lat1 = (location.coords.latitude * Math.PI) / 180;
        lat2 = (position.coords.latitude * Math.PI) / 180;

        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a =
          Math.pow(Math.sin(dlat / 2), 2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
        let c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 3956;
        // calculate the result

        distance = c * r + totalDistance;
        console.log(distance);
        setTotalDistance(parseFloat(distance));
        setLocation(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    console.log(Platform.OS + ': ');
    console.log(location);
    console.log(totalDistance);
  });

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text> Workout Screen! </Text>
        <Button title="Start" onPress={() => startRun()} />
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
