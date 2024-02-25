import React, { FC, RefObject, useState } from "react";
import { Dimensions, PermissionsAndroid, StyleSheet } from "react-native";
import Geolocation from "react-native-geolocation-service";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface MapNavigatorProps {}

interface MapNavigatorState {
  coordinates: Coordinate[];
}

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = "..."; // Replace with your actual API key

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    console.log("granted", granted);
    if (granted === "granted") {
      console.log("You can use Geolocation");
      return true;
    } else {
      console.log("You cannot use Geolocation");
      return false;
    }
  } catch (err) {
    return false;
  }
}

const MapNavigator = () => {
  const [location, setLocation] = useState(false);

const getLocation = () => {
  const result = requestLocationPermission();
  result.then((res) => {
    console.log("res is:", res);
    if (res) {
      navigator.geolocation.getCurrentPosition(
        (position: any) => {
          console.log(position);
          setLocation(position);
          const coordinate: Coordinate = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setCoordinates([...coordinates, coordinate]);
        },
        (error: any) => {
          // See error code charts below.
          console.log(error.code, error.message);
          setLocation(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  });
  console.log(location);
};

  const mapView = React.createRef<MapView>();

  const [coordinates, setCoordinates] = useState<Coordinate[]>([
    {
      latitude: 10.8225079,
      longitude: 106.6880955,
    },
  ]);
  getLocation();
  const onMapPress = (e: any) => {
   
  };

  return (
    <MapView
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      style={StyleSheet.absoluteFill}
      ref={mapView}
      onPress={onMapPress}
    >
      {coordinates.map((coordinate, index) => (
        <Marker key={`coordinate_${index}`} coordinate={coordinate} />
      ))}
      {coordinates.length >= 2 && (
        <MapViewDirections
          origin={coordinates[0]}
          waypoints={
            coordinates.length > 2 ? coordinates.slice(1, -1) : undefined
          }
          destination={coordinates[coordinates.length - 1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onStart={(params) => {
            console.log(
              `Started routing between "${params.origin}" and "${params.destination}"`
            );
          }}
          onReady={(result) => {
            console.log(`Distance: ${result.distance} km`);
            console.log(`Duration: ${result.duration} min.`);
            mapView.current?.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: width / 20,
                bottom: height / 20,
                left: width / 20,
                top: height / 20,
              },
            });
          }}
          onError={(errorMessage) => {
            // console.log('GOT AN ERROR');
          }}
        />
      )}
    </MapView>
  );
};

export default MapNavigator;
