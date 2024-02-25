import React, { FC, RefObject, useState } from "react";
import { Dimensions, PermissionsAndroid, StyleSheet } from "react-native";
import Geolocation from "react-native-geolocation-service";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useAppSelector } from "@/global/hooks/redux";

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
  const mapView = React.createRef<MapView>();
  const userLocation = useAppSelector((s) => s.main).userLocation;
  const [coordinates, setCoordinates] = useState<Coordinate[]>([
    {
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
    },
  ]);
  const onMapPress = (e: any) => {};
  if (Object.keys(userLocation).length === 0) return;
  return (
    <MapView
      initialRegion={{
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
      style={StyleSheet.absoluteFill}
      ref={mapView}
      onPress={onMapPress}
    >
      {/*{coordinates.map((coordinate, index) => (*/}
      {/*  <Marker key={`coordinate_${index}`} coordinate={coordinate} />*/}
      {/*))}*/}
      {/*{coordinates.length >= 2 && (*/}
      {/*  <MapViewDirections*/}
      {/*    origin={coordinates[0]}*/}
      {/*    waypoints={*/}
      {/*      coordinates.length > 2 ? coordinates.slice(1, -1) : undefined*/}
      {/*    }*/}
      {/*    destination={coordinates[coordinates.length - 1]}*/}
      {/*    apikey={GOOGLE_MAPS_APIKEY}*/}
      {/*    strokeWidth={3}*/}
      {/*    strokeColor="hotpink"*/}
      {/*    optimizeWaypoints={true}*/}
      {/*    onStart={(params) => {*/}
      {/*      console.log(*/}
      {/*        `Started routing between "${params.origin}" and "${params.destination}"`,*/}
      {/*      );*/}
      {/*    }}*/}
      {/*    onReady={(result) => {*/}
      {/*      console.log(`Distance: ${result.distance} km`);*/}
      {/*      console.log(`Duration: ${result.duration} min.`);*/}
      {/*      mapView.current?.fitToCoordinates(result.coordinates, {*/}
      {/*        edgePadding: {*/}
      {/*          right: width / 20,*/}
      {/*          bottom: height / 20,*/}
      {/*          left: width / 20,*/}
      {/*          top: height / 20,*/}
      {/*        },*/}
      {/*      });*/}
      {/*    }}*/}
      {/*    onError={(errorMessage) => {*/}
      {/*      // console.log('GOT AN ERROR');*/}
      {/*    }}*/}
      {/*  />*/}
      {/*)}*/}
    </MapView>
  );
};

export default MapNavigator;
