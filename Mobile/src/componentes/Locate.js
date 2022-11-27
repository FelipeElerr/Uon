import React, {useState, useEffect} from 'react'
import * as Location from 'expo-location';
import { ScrollView, View, Text, FlatList, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native'

export default function App() {
  const [_latitude, setLatitude] = useState()
  const [_longitude, setLongitude] = useState()

  React.useEffect(
    () => {
      getLocation()
    },[]
  )

  const getLocation = async () => {
    let status = await Location.requestForegroundPermissionsAsync();
  
    Location.enableNetworkProviderAsync()
    const {latitude, longitude} = (await Location.getCurrentPositionAsync(({
        enableHighAccuracy: true,
        accuracy: Location.Accuracy.High
      })
    )).coords
    
    setLatitude(latitude)
    setLongitude(longitude)
  
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.035,
      longitudeDelta: 0.035
    }
    console.log(region)
  
    return region
  }

  return (
    <View>
      <Text> Latitude: {_latitude}</Text>
      <Text> Longitude: {_longitude}</Text>
    </View>
  );
}