'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} = React;

var SplashScreen = require('./screens/splashscreen')
var WelcomeScreen = require('./screens/welcome')
var AppList = require('./screens/applist')
var AppDetail = require('./screens/appdetails')

class App extends Component{
  render(){
     return (
      <Navigator
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
            navigator={navigator} />
      );
    }
    if (routeId === 'AppDetail') {
      return (
        <AppDetail
          navigator={navigator} />
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

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('FrogApps', () => App);