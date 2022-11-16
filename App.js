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
  longitudeDelta:0.0421,},
  texto: ''
    },
      
    )
    
    function mudouMapa(){
       state.texto = state.region.latitude
      setState(state);
      console.log(state)
    }
    
  return (
    <View style={styles.container}>
      <Text>{state.region.latitude} | {state.region.longitude}</Text>
      <Text>Latitude atual</Text>
      <Text>{state.texto}</Text>
      <MapView
      /*onMapReady={() => {alert("mapa carregado")}}*/
      onRegionChangeComplete={state.mudoumapa}
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
