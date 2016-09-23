'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
var styles = require('../stylesheets/styles');

class SplashScreen extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'WelcomeScreen',
      });
    }, 2000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{flex: 1}}
          source={require('../images/frogasia1.png')}
        />
      </View>
    );
  }
}

module.exports = SplashScreen;