import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Geolocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position : {
                coords: {}
            }
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({position});
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000}
        );
        navigator.geolocation.watchPosition((position) => {
            this.setState({position});
        });
    }
}

export default Geolocation;