import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import ScrollableTabs from './ScrollableTabs';


export default React.createClass({
  render() {
    return <Navigator    
      initialRoute={{}}
      renderScene={this.renderScene}
    />;
  },

  renderScene(route, nav) {
      return <ScrollableTabs />;
  }
});

const styles = StyleSheet.create({
  
});
