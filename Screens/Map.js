import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {Polyline} from 'react-native-maps';
// Props accept data from one component to another
export default function Map(props) {
  useEffect(() => {
    console.log('[RENDERING]: Map');
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        // Could be always true in production
        followUserLocation={props.followUserLocation}
        showsUserLocation={props.showUserLocation}
        // Initial map loads to the device location
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          // Zoom in or out:
          latitudeDelta: 0.0052,
          longitudeDelta: 0.0021,
        }}>
        <Polyline
          coordinates={props.markers}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#7F0000', // no color, creates a "long" gradient between the previous and next coordinate
            '#7F0000',
            '#00D084',
          ]}
          strokeWidth={4}
        />
      </MapView>
    </View>
  );
}
// * Improper styling = invisible map!
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
