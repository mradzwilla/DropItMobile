import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
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
	      },
	      posts: [
	      	{coordinate:{
				latitude: 37.3321578503793,
		    	longitude: -122.0298132703313
		    	},
	        title:"title",
	        description:"description"
	    	}
	    	]
	  	}
	  	this.onRegionChange = this.onRegionChange.bind(this);
		this.setState = this.setState.bind(this);
	}

	onRegionChange(region) {
		console.log(this.state.region)
		this.setState({ region });
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
		// var postsArray = this.state.posts.slice()
		// var newPost = {
		// 	coordinate:{
		// 		latitude: this.state.region.latitude,
		//     	longitude: this.state.region.longitude
		//     	},
	 //        title:"title",
	 //        description:"description"
		// }
		// postsArray.push(newPost)
		// this.setState({posts: postsArray})
		console.log(this.state.region)
	}

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
	         >
             {this.state.posts.map((post, i) => (
			    <MapView.Marker
			      key={i}
			      coordinate={post.coordinate}
			      title={post.title}
			      description={post.description}
			    />
			  ))}
	         </MapView>
	       </View>
	         <TextInput 
	         editable = {true}             
	         placeholder = 'Password'
	         style={{backgroundColor: 'coral', height: 70, justifyContent: 'center', alignItems: 'center'}}
	         >
	        </TextInput>
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