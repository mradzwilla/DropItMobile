import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  AsyncStorage,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class DropIt extends Component {
constructor(props){
	super(props);
	this.state = {
	  region: { 
	  	    latitude: 40.642625,
          	longitude: -74.014391,
          	latitudeDelta: 0.092,
	    	longitudeDelta: 0.0621,
  	}
}
this.onRegionChange = this.onRegionChange.bind(this)
this.setState = this.setState.bind(this)
}

onRegionChange(region) {
  this.setState({ region });
}

componentWillMount() {
	this._getCoordinates()
}


_getCoordinates(){
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
      	console.log(initialPosition.coords.latitude)
      	return initialPosition
      },
      (error) => {alert(error.message)},
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
}

render() {
  return (
    <MapView
      region={this.state.region}
      onRegionChange={this.onRegionChange}
      style = {{flex:1}}
    />
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
