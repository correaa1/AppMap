import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const [state, setState] = useState({
    latitude: -27.5579069,
    longitude: -48.6281753,
    latitudeDelta:0.0922,
    longitudeDelta:0.0421, })
  return (
    <View style={styles.container}>
      <MapView
      style={styles.mapa}
       setState {...state}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa:{
    width: "100%",
    height:750,
  }
});
