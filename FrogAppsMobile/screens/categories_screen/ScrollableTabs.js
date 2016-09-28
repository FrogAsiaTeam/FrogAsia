import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default React.createClass({
  render() {
    return (<ScrollableTabView 
      tabBarActiveTextColor="#fff"
      tabBarInactiveTextColor="#fff"
      tabBarBackgroundColor = "rgb(0, 188, 255)"
      tabBarUnderlineStyle={styles.tabActiveUnderline}
      tabBarTextStyle={styles.tabFont}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Text tabLabel='CATEGORIES' style={styles.tabLabel}>ABOUT US</Text>
      <Text tabLabel='POPULAR' style={styles.tabLabel}>POPULAR</Text>     
    </ScrollableTabView>)
  },
});

const styles = StyleSheet.create({
  tabLabel:{
    color: "#0288D1",
    fontFamily: "Oxygen",
    fontWeight: '500'
  },
  tabActiveUnderline:{
    backgroundColor: "#fff",
    height: 1
  },
  tabFont:{
    fontSize: 17,
    fontFamily: "Oxygen",
    fontWeight: 'bold'
  },


});