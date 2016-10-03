'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  BackAndroid,
  Alert,
} from 'react-native';

var SplashScreen = require('./screens/splashscreen')
var WelcomeScreen = require('./screens/welcome')
var AppList = require('./screens/applist')
var AppDetail = require('./screens/appdetails')
var _navigator;

class App extends Component{
  constructor(props){
    super(props);
  }
  _handleBackButton(){
    if (_navigator.getCurrentRoutes().length === 1  ) {
      // if (Alert.alert('Do you want to exit application?') == true){
      //   return true;
      // }
      return false;
    }
    _navigator.pop();
    return true;
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackButton);
  }

 render(){
    return (
      <Navigator
          style={{ flex:1 }}
          initialRoute={{id: 'SplashScreen', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    _navigator = navigator;
    var routeId = route.id;
    if (routeId === 'SplashScreen') {
      return (
        <SplashScreen
          navigator={navigator} />
      );
    }
    if (routeId === 'WelcomeScreen') {
      return (
        <WelcomeScreen
          navigator={navigator} />
      );
    }
    if (routeId === 'AppList') {
      return (
        <AppList
            navigator={navigator}  />
      );
    }
    if (routeId === 'AppDetail') {
      return (
        <AppDetail
          navigator={navigator} data = {route.passProps.dataItem} />
      );
    }
    return this.noRoute(navigator);

  }

  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>No Route</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('FrogAppsMobile', () => App);
