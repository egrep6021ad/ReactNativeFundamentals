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
import Map from './Map';

export default function Workout({route, navigation}) {
  const [location, setLocation] = useState(route.params.location);
  const [totalDistance, setTotalDistance] = useState(0);
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [followUserLocation, setFollowUserLocation] = useState(false);
  const [markers, setMarkers] = useState([]);

  const startRun = () => {
    calculateDistance();
    setFollowUserLocation(true);
    setShowUserLocation(true);
  };

  const calculateDistance = () => {
    Geolocation.getCurrentPosition(
      position => {
        //https://www.geeksforgeeks.org/program-distance-two-points-earth/
        lon1 = (location.coords.longitude * Math.PI) / 180;
        lon2 = (position.coords.longitude * Math.PI) / 180;
        lat1 = (location.coords.latitude * Math.PI) / 180;
        lat2 = (position.coords.latitude * Math.PI) / 180;

        // Haversine formula:
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a =
          Math.pow(Math.sin(dlat / 2), 2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
        let c = 2 * Math.asin(Math.sqrt(a));
        // Radius of earth in miles:

        let r = 3956;

        // calculate the result + distance already traveled
        distance = c * r + totalDistance;
        console.log(distance);
        setTotalDistance(distance);
        // update current location
        setLocation(position);
        const latLng = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        // Update array of markers:
        setMarkers([...markers, latLng]);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    console.log('[RENDERING]: Workout Screen (' + Platform.OS + ')');
  });

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.mapContainer}>
          {Platform.OS == 'ios' ? (
            <Map
              location={location}
              showUserLocation={showUserLocation}
              followUserLocation={followUserLocation}
              markers={markers}
            />
          ) : null}
        </View>
        <Text style={styles.distanceText}> Distance: {totalDistance} </Text>
        <Button title="Start" onPress={() => startRun()} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    //justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'yellow',
  },
  mapContainer: {
    height: 400,
    width: 400,
  },
  distanceText: {
    marginTop: 20,
    paddingBottom: 20,
  },
});
