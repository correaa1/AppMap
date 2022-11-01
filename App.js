import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const [state, setState] = useState({
    region: {
   latitude: -27.5579069,
  longitude: -48.6281753,
  latitudeDelta:0.0922,
  longitudeDelta:0.0421,}
    }
    )
  
  function  moverCidade(lat,long){
    let newState = state
    
      let region = {
        latitude: lat,
        longitude: long,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421,
      }
      newState.region = region
      setState(newState)
      console.log(newState)
    }
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <Button title='Floripa' onPress={() => {moverCidade(-27.5579069, -48.6281753 )}}/>
      <Button title='São Paulo' onPress={() => {moverCidade(-23.6034287, -46.661898)}}/>
      </View>
      <Text>{state.region.latitude} | {state.region.longitude}</Text>
      <MapView
      style={styles.mapa}
      region={state.region}
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
    height:650,
  }
});
