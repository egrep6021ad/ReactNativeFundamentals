import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Text,
  View,
  Alert,
  Button,
  LogBox,
} from 'react-native';
LogBox.ignoreAllLogs();
import {useNavigation} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import Map from './Map';
import BackgroundTimer from 'react-native-background-timer';

export default function Workout({route}) {
  const navigation = useNavigation();
  const [location, setLocation] = useState(route.params.location);
  const [totalDistance, setTotalDistance] = useState(0);
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [followUserLocation, setFollowUserLocation] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [runStarted, setRunStarted] = useState(false);
  const [globalTimer, setGlobalTimer] = useState(0);

  const startRun = () => {
    setFollowUserLocation(true);
    setShowUserLocation(true);
    setRunStarted(true);
    // Watch the runner
    Geolocation.watchPosition(
      position => {
        // Calculate distance:
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
        // distance  + distance already traveled
        distance = c * r + totalDistance;

        setTotalDistance(distance);
        setLocation(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 10, // Meters
      },
    );

    let time = 0;
    BackgroundTimer.runBackgroundTimer(() => {
      time += 1;
      setGlobalTimer(time);
    }, 1000);
  };

  const stopRun = () => {
    setShowUserLocation(false);
    setFollowUserLocation(false);
    setRunStarted(false);
    Geolocation.stopObserving();
    BackgroundTimer.stopBackgroundTimer();
    Alert.alert('Congrats!', `You ran: ${totalDistance} miles!`, [
      {text: 'OK', onPress: () => navigation.navigate('Home')},
    ]);
  };

  useEffect(() => {
    console.log('[RENDERING]: Workout Screen (' + Platform.OS + ')');
    if (runStarted) {
      const latLng = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setMarkers([...markers, latLng]);
    }

    console.log('Distance: ' + totalDistance.toFixed(3) + ' miles');
    console.log('Total time (seconds): ' + globalTimer);

    return () => {
      console.log('Unmounting: ');
      Geolocation.clearWatch();
    };
  }, [location]);

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.mapContainer}>
          <Map
            location={location}
            showUserLocation={showUserLocation}
            followUserLocation={followUserLocation}
            markers={markers}
          />
        </View>
        <View style={styles.distanceTextHolder}>
          <Text style={styles.distanceText}>
            {` Distance: ${totalDistance.toFixed(3)} miles `}
          </Text>
        </View>
        <View style={styles.distanceTextHolder}>
          <Text style={styles.distanceText}>
            {` Time: ${globalTimer} seconds`}
          </Text>
        </View>
        <View style={styles.startButton}>
          <Button
            color={Platform.OS == 'ios' ? 'white' : null}
            title="Start"
            onPress={() => startRun()}
          />
        </View>
        <View style={styles.stopButton}>
          <Button color="black" title="Stop" onPress={() => stopRun()} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#BEDADC',
  },
  mapContainer: {
    height: Platform.OS == 'ios' ? 400 : 300,
    width: 400,
  },
  distanceTextHolder: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 50,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  distanceText: {
    fontSize: 20,
  },
  startButton: {
    marginTop: 20,
    width: '80%',
    backgroundColor: Platform.OS == 'ios' ? '#4CAF50' : null,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  stopButton: {
    marginTop: 20,
    width: '80%',
    backgroundColor: '#F44336',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
