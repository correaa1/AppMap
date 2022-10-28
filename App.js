import { StatusBar } from 'expo-status-bar';
import { Component, } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
  region: {
  latitude: -27.5565821,
  longitude: -48.6245674,
  latitudeDelta:0.0922,
  longitudeDelta:0.0421,}}}

  

render(){
  return (
    <View style={styles.container}>
      <MapView
      style={styles.mapa}
    region={this.state.region}
    
      />
  
    </View>
  );
}
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
