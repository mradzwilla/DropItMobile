import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class DropIt extends Component {
constructor(props){
	super(props);
	this.state = {
	  region: { null },
      isLoaded: false
  	}
this.onRegionChange = this.onRegionChange.bind(this)
this.setState = this.setState.bind(this)
this._getCoordinates = this._getCoordinates.bind(this)
}

onRegionChange(region) {
  this.setState({ region });
}

componentWillMount() {
	this._getCoordinates()
}
componentDidMount() {
	this.setState({ isLoaded: true })
}
_getCoordinates(){
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
      	var newCoords = initialPosition
      	var newRegion = { 
		  	    latitude: initialPosition.coords.latitude,
	          	longitude: initialPosition.coords.longitude,
	          	latitudeDelta: 0.192,
		    	longitudeDelta: 0.1621
		   	}
      this.setState({ region: newRegion});
      console.log(newCoords)
      console.log(this.state.region)
      },
      (error) => {alert(error.message)},
      {timeout: 20000, maximumAge: 1000}
    );
}

  renderMap() {
    if (this.state.isLoaded) {
      return (
        <MapView
          initialRegion={this.state.region}
        >
        </MapView>
      )
    }
    return (
      <Text>Loading...</Text>
    )
  }

  render() {
    return (
      this.renderMap()
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
