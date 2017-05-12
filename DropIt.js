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
	      region: {
	        latitude: 52,
	        longitude: 5,
	        latitudeDelta: 0.0922,
	        longitudeDelta: 0.0421
	      }
	  	}
	  	this.onRegionChange = this.onRegionChange.bind(this);
		this.setState = this.setState.bind(this);
		this._updatePosition = this._updatePosition.bind(this)
	}

	onRegionChange(region) {
		this.setState({ region });
	}

	componentWillMount() {
		// this._getCoordinates()
		// setInterval(this.render(), 7000);
	}
	componentDidUpdate(){
	}
	_updatePosition(){

	}
componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.0011
          }
        });
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
		// _getCoordinates(){
		//     navigator.geolocation.getCurrentPosition(
		//       (initialPosition) => {
		//       	var newCoords = initialPosition
		//       	var newRegion = { 
		// 		  	    latitude: initialPosition.coords.latitude,
		// 	          	longitude: initialPosition.coords.longitude,
		// 	          	latitudeDelta: 0.192,
		// 		    	longitudeDelta: 0.1621
		// 		   	}
		//       this.setState({ region: newRegion});
		//       console.log(newCoords)
		//       console.log(this.state.region)
		//       },
		//       (error) => {alert(error.message)},
		//       {timeout: 20000, maximumAge: 1000}
		//     );
		// }

render() {
    return (
     <View style={{ flex: 1 }}>
       <View style={{backgroundColor: 'coral', height: 70, justifyContent: 'center', alignItems: 'center'}}>
         <Text>
            <Text>longitude: {this.state.region.longitude}</Text>
            <Text>latitude: {this.state.region.latitude}</Text>
        </Text>
       </View>
       <View style={styles.container}>
         <MapView
           style={styles.map}
           initialRegion={this.state.region}
           region={this.state.region}
           onRegionChange={this.onRegionChange}
         />
       </View>
     </View>
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
